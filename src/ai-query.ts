import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY ?? '');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const fetchAIRes = async (query : string) => {
    const result = await model.generateContent(query);
    return result.response.text();
}