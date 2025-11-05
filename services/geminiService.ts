
import { GoogleGenAI, Type } from "@google/genai";
import { Donor } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const donorSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: {
        type: Type.STRING,
        description: "A unique anonymous identifier for the donor, e.g., DONOR-1234",
      },
      bloodType: {
        type: Type.STRING,
        description: "The blood type of the donor.",
      },
      location: {
        type: Type.STRING,
        description: "The general vicinity of the donor, e.g., 'Downtown Cityville'",
      },
      availability: {
        type: Type.STRING,
        description: "A brief, friendly status of their availability, e.g., 'Ready to help!' or 'Available next week'",
      },
    },
    required: ["id", "bloodType", "location", "availability"],
  },
};

export const findDonors = async (bloodType: string, location: string): Promise<Donor[]> => {
  try {
    const prompt = `A user needs ${bloodType} blood in ${location}. Generate a list of 5 fictional, anonymous donors who are a match and located nearby. Ensure the blood types are compatible matches for the requested type. Format the response as a JSON array of objects.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: donorSchema,
      },
    });

    const jsonText = response.text.trim();
    const donors: Donor[] = JSON.parse(jsonText);
    return donors;
  } catch (error) {
    console.error("Error finding donors:", error);
    throw new Error("Failed to fetch donor data. The AI may be busy, please try again.");
  }
};

export const answerEligibilityQuestion = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: "You are a helpful and reassuring assistant for a blood donation website. Answer the user's question about blood donation eligibility clearly, concisely, and in a friendly tone. Provide general information and always advise the user to consult a healthcare professional for definitive advice.",
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error answering question:", error);
    throw new Error("I'm sorry, I couldn't process that question. Please try asking in a different way.");
  }
};
