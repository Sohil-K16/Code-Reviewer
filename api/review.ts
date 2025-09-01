
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'API_KEY environment variable not set on the server.' });
  }

  const { code, language } = request.body;

  if (!code || typeof code !== 'string' || !language || typeof language !== 'string') {
    return response.status(400).json({ error: 'Missing or invalid "code" or "language" in request body.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
    As an expert code reviewer, please analyze the following ${language} code snippet. 
    Provide a thorough review focusing on:
    1.  **Potential Bugs & Errors:** Identify any logical errors, edge cases not handled, or potential runtime issues.
    2.  **Performance Optimization:** Suggest ways to improve the code's efficiency and speed.
    3.  **Best Practices & Readability:** Comment on code style, naming conventions, and overall clarity. Suggest improvements for maintainability.
    4.  **Security Vulnerabilities:** Point out any potential security risks.

    Format your response in clear, actionable markdown. Use code blocks for suggestions.

    Code to review:
    \`\`\`${language}
    ${code}
    \`\`\`
    `;

    const genAIResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    const feedback = genAIResponse.text;

    response.status(200).json({ feedback });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    response.status(500).json({ error: `Gemini API Error: ${errorMessage}` });
  }
}