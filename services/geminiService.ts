
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function reviewCode(code: string, language: string): Promise<string> {
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

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the Gemini API.");
  }
}
