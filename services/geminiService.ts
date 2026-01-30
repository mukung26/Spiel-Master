
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SOP_CONTEXT } from "../constants";

// --- KEY ROTATION SYSTEM ---
// Retrieve keys injected by Vite
const API_KEYS: string[] = (process.env.API_KEYS as unknown as string[]) || [];
if (API_KEYS.length === 0 && process.env.API_KEY) {
    API_KEYS.push(process.env.API_KEY);
}

let currentKeyIndex = 0;

/**
 * Rotates to the next available API Key in the pool.
 */
const rotateKey = () => {
    if (API_KEYS.length <= 1) return;
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    console.warn(`🔄 Switching to API Key Index: ${currentKeyIndex}`);
};

/**
 * Gets a client instance using the current active key.
 */
const getClient = () => {
  const key = API_KEYS[currentKeyIndex];
  if (!key || key.includes('PASTE_YOUR')) {
    console.error("Critical Error: No valid API Key available.");
    throw new Error("Missing API Key. Please check your configuration.");
  }
  return new GoogleGenAI({ apiKey: key });
};

/**
 * Wrapper to execute AI operations with auto-retry and key rotation.
 */
const executeWithRetry = async <T>(operation: (client: GoogleGenAI) => Promise<T>): Promise<T> => {
    let attempts = 0;
    // We try at least as many times as we have keys to give every key a chance
    const maxAttempts = Math.max(API_KEYS.length, 1);

    while (attempts < maxAttempts) {
        try {
            const client = getClient();
            return await operation(client);
        } catch (error: any) {
            attempts++;
            const msg = (error.message || '').toLowerCase();
            
            // Detect specific errors that warrant a key switch
            // 429: Quota Exceeded / Too Many Requests
            // 403: Permission Denied / Key Invalid
            // "expired": Key expired
            const isAuthOrQuotaError = msg.includes('429') || msg.includes('403') || msg.includes('expired') || msg.includes('key') || msg.includes('quota');

            if (isAuthOrQuotaError && attempts < maxAttempts) {
                console.warn(`⚠️ API Call failed with key ${currentKeyIndex}. Retrying with next key...`);
                rotateKey();
                continue; // Retry loop
            }

            // If it's a different error (e.g. Bad Request) or we ran out of keys, throw.
            throw error;
        }
    }
    throw new Error("All API keys in the pool failed.");
};

// --- HELPER ---

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: {
      data: await base64EncodedDataPromise as string,
      mimeType: file.type,
    },
  };
};

// --- PUBLIC API FUNCTIONS ---

export const generateText = async (
  prompt: string, 
  history: { role: string, parts: { text: string }[] }[] = [],
  userInstruction: string = ""
): Promise<string> => {
  return executeWithRetry(async (ai) => {
      const model = "gemini-3-flash-preview";
      const combinedSystemInstruction = `
        You are an expert E-Commerce Seller Support Assistant (Spiel Master).
        
        GLOBAL SOP CONTEXT:
        ${SOP_CONTEXT}
        
        USER-SPECIFIC DIRECTIVE:
        ${userInstruction || "Standard professional response."}
        
        OUTPUT RULES:
        1. STANDARD MODE (DEFAULT): 
           - Provide a helpful, professional, and formatted text response.
           - Use Markdown for formatting (e.g., **bold** for emphasis, lists for steps).
           - Do NOT use JSON unless explicitly requested.

        2. DUAL-LANGUAGE MODE (STRICT CONDITIONAL):
           - TRIGGER: ONLY IF the user EXPLICITLY asks for a response in BOTH "English" and "Portuguese" (e.g., "side-by-side", "both languages", "in English and Brazil").
           - ACTION: If triggered, you MUST output the response in raw JSON format.
           - JSON STRUCTURE:
             {
               "english": "The English version...",
               "portuguese": "The Portuguese (Brazil) version..."
             }
           - Do NOT include markdown code blocks around the JSON.
      `;

      const chat = ai.chats.create({
        model: model,
        history: history,
        config: {
          systemInstruction: combinedSystemInstruction
        }
      });

      const response: GenerateContentResponse = await chat.sendMessage({ message: prompt });
      return response.text || "";
  });
};

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  return executeWithRetry(async (ai) => {
    const model = "gemini-3-flash-preview";
    const response = await ai.models.generateContent({
      model: model,
      contents: `Translate the following text to ${targetLang}. 
      Maintain a professional Customer Service tone suitable for e-commerce. 
      If there is slang, translate it to its professional equivalent in the target language.
      
      Text to translate:
      ${text}`,
      config: {
        systemInstruction: "You are a professional translator for Customer Service. Focus on speed, accuracy, and professional tone."
      }
    });

    return response.text || "Translation failed.";
  });
};

export const generateImage = async (prompt: string): Promise<string> => {
  return executeWithRetry(async (ai) => {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data was found in the model response.");
  });
};

export const analyzeImage = async (file: File, prompt: string): Promise<string> => {
  // Pre-process file outside the retry loop to avoid overhead
  const imagePart = await fileToGenerativePart(file);
  
  return executeWithRetry(async (ai) => {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [imagePart, { text: prompt || "Describe this image for customer support context." }],
      },
    });

    return response.text || "No analysis result returned.";
  });
};

export const generateVideo = async (prompt: string): Promise<string> => {
  return executeWithRetry(async (ai) => {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    // Polling loop
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
      throw new Error("Video generation succeeded but no download link was provided.");
    }
    
    // Note: We use the *current* key index for the download link
    const currentKey = API_KEYS[currentKeyIndex];
    return `${downloadLink}&key=${currentKey}`;
  });
};
