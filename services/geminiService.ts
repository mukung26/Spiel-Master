import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client with validation
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
    throw new Error("Invalid API Key. Please set GEMINI_API_KEY in .env.local");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateText = async (prompt: string, history: { role: string, parts: { text: string }[] }[] = []): Promise<string> => {
  try {
    const ai = getClient();
    const model = "gemini-3-flash-preview";
    
    // Using chat approach
    const chat = ai.chats.create({
      model: model,
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message: prompt });
    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Gemini Text Generation Error:", error);
    throw new Error(error.message || "Failed to generate text");
  }
};

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const ai = getClient();
    // Using gemini-2.5-flash-image as default per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: '1:1',
        },
      },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    throw new Error("No image part found in response");
  } catch (error: any) {
    console.error("Gemini Image Generation Error:", error);
    throw new Error(error.message || "Failed to generate image");
  }
};

export const analyzeImage = async (file: File, prompt: string): Promise<string> => {
  try {
    const ai = getClient();
    
    // Convert file to base64
    const base64Data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        // Remove data url prefix
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    // Use gemini-3-flash-preview for text analysis of images (multimodal)
    // gemini-2.5-flash-image is primarily for generation.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', 
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: file.type,
              data: base64Data
            }
          },
          { text: prompt || "Describe this image." }
        ]
      }
    });

    return response.text || "No analysis available.";
  } catch (error: any) {
    console.error("Gemini Image Analysis Error:", error);
    throw new Error(error.message || "Failed to analyze image");
  }
};

export const generateVideo = async (prompt: string): Promise<string> => {
  // CRITICAL: Re-create client to pick up user-selected key for Veo
  // We assume the user has selected a key via the aistudio popup handled in view
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
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
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    
    if (!downloadLink) {
      throw new Error("Video generation failed or returned no URI");
    }

    // Fetch the actual bytes using the key
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    if (!response.ok) {
       throw new Error("Failed to download generated video");
    }
    
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    console.error("Veo Video Generation Error:", error);
    throw new Error(error.message || "Failed to generate video");
  }
};