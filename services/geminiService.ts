
import { GoogleGenAI, Type } from "@google/genai";

// Fix: obtain process.env.API_KEY directly inside the function for initialization
export const analyzeProject = async (description: string) => {
  // Always use the latest API key from environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following Web3 project idea and provide feedback in a JSON format. Include viability (0-10), key risks, and 3 actionable suggestions for incubation. Description: ${description}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          viabilityScore: { type: Type.NUMBER, description: "A score from 0 to 10" },
          summary: { type: Type.STRING },
          risks: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
          suggestions: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          }
        },
        required: ["viabilityScore", "summary", "risks", "suggestions"]
      }
    }
  });

  try {
    // Access the .text property directly
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return null;
  }
};
