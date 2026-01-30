
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SOP_CONTEXT } from "../constants";

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

const getClient = () => {
  // Vite replaces 'process.env.API_KEY' with the actual string value during build
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("Critical Error: API Key is missing. Please check vite.config.ts and your environment variables.");
    throw new Error("API_KEY environment variable is not defined. The AI features will not work.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateText = async (
  prompt: string, 
  history: { role: string, parts: { text: string }[] }[] = [],
  userInstruction: string = ""
): Promise<string> => {
  try {
    const ai = getClient();
    const model = "gemini-3-flash-preview";
    
    const combinedSystemInstruction = `
      You are an expert E-Commerce Seller Support Assistant.
      
      GLOBAL SOP CONTEXT:
      ${SOP_CONTEXT}
      
      USER-SPECIFIC DIRECTIVE:
      ${userInstruction || "Standard professional response."}
      
      INSTRUCTIONS:
      - Answer the user's query professionally based on the context.
      - Provide a single, clear response in the primary language (English) unless explicitly asked to translate.
      - Use "We" and "Our" to represent the brand.
      - Maintain a professional, empathetic, and helpful tone.
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
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return `Error: ${error.message || "I encountered an issue connecting to the AI service."}`;
  }
};

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  try {
    const ai = getClient();
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
  } catch (error: any) {
    console.error("Translation Error:", error);
    throw new Error(error.message || "Translation failed");
  }
};

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const ai = getClient();
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
  } catch (error: any) {
    console.error("Image Generation Error:", error);
    throw new Error(error.message || "Failed to generate image.");
  }
};

export const analyzeImage = async (file: File, prompt: string): Promise<string> => {
  try {
    const ai = getClient();
    const imagePart = await fileToGenerativePart(file);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [imagePart, { text: prompt || "Describe this image for customer support context." }],
      },
    });

    return response.text || "No analysis result returned.";
  } catch (error: any) {
    console.error("Image Analysis Error:", error);
    throw new Error(error.message || "Failed to analyze image.");
  }
};

export const generateVideo = async (prompt: string): Promise<string> => {
  try {
    const ai = getClient();
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
      throw new Error("Video generation succeeded but no download link was provided.");
    }
    
    // Append API key for download if required
    return `${downloadLink}&key=${process.env.API_KEY}`;
  } catch (error: any) {
    console.error("Video Generation Error:", error);
    throw new Error(error.message || "Failed to generate video.");
  }
};
