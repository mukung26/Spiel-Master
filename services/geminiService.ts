import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client.
// Note: For Veo (Video), we re-instantiate to ensure the user-selected key is picked up.
const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateText = async (prompt: string, history: { role: string, parts: { text: string }[] }[] = []): Promise<string> => {
  const ai = getClient();
  const model = "gemini-3-flash-preview";
  
  // Using chat approach
  const chat = ai.chats.create({
    model: model,
    history: history,
  });

  const response: GenerateContentResponse = await chat.sendMessage({ message: prompt });
  return response.text || "No response generated.";
};

export const generateImage = async (prompt: string): Promise<string> => {
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
  throw new Error("No image generated");
};

export const analyzeImage = async (file: File, prompt: string): Promise<string> => {
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

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
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
};

export const generateVideo = async (prompt: string): Promise<string> => {
  // CRITICAL: Re-create client to pick up user-selected key for Veo
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
};