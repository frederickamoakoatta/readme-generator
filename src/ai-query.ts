import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import {AiQuery} from "./index";
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY ?? '');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const fetchAIRes = async (query : AiQuery) => {
    model.startChat({
        systemInstruction: `
    - Make sure you always generate content in readme format README format.
    - This project can be described as a ${query.type === 'none' ? 'general code base' : query.type}.
    - This project is been built with ${query.language === 'none' ? 'no specific coding language, so draft in pseudo code form' : query.language}.
    - This project is authored by ${query.author}.
    - If asked about restricted topics, reply: "I'm unable to generate that as a README format."
  `,
    });
    const result = await model.generateContent(query.description);
    return result.response.text();
}