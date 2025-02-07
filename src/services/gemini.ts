import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_CONFIG } from "../config/constants";
import { FETVA_PROMPT } from "./prompts";
import { FetvaError } from '../utils/error';
import { isValidFetvaResponse } from '../utils/validation';
// @ts-ignore
const GEMINI_API_KEY = __GEMINI_API_KEY__;

if (!GEMINI_API_KEY) {
  throw new Error('Gemini API key is not configured. Please check your .env file.');
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: API_CONFIG.MODEL });

export async function getFetva(question: string): Promise<string> {
  try {
    const prompt = FETVA_PROMPT.replace('{{question}}', question);
    
    // Configure the model with specific parameters
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 2048,
      }
    });

    const response = await result.response;
    const text = response.text();
    
    try {
      // Clean the response text to ensure it's valid JSON
      const cleanedText = text
        .trim()
        .replace(/```json\n?|```/g, '')
        // Remove any non-printable characters
        .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
        // Ensure proper line endings
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n');
      const parsed = JSON.parse(cleanedText);
      
      if (!isValidFetvaResponse(parsed)) {
        console.error('Invalid response structure:', parsed);
        throw new FetvaError('Yanıt formatı geçersiz. Lütfen tekrar deneyiniz.');
      }
      
      return JSON.stringify(parsed, null, 2);
    } catch (parseError) {
      console.error('Parse error:', parseError, '\nResponse text:', text);
      throw new FetvaError('Yanıt işlenirken bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  } catch (error) {
    console.error('API error:', error);
    if (error instanceof FetvaError) {
      throw error;
    }
    throw new FetvaError('Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
  }
}