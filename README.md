<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Gemini Code Reviewer

Gemini Code Reviewer is an AI-powered web app that analyzes source code and provides actionable review feedback. Leveraging Google's Gemini AI, it performs deep analysis of code snippets across popular programming languages, helping developers find bugs, optimize performance, improve readability, and detect security vulnerabilities.

## Features

- **Multi-language support:** Review code in JavaScript, TypeScript, Python, Java, C#, Go, Rust, Ruby, PHP, HTML, CSS, SQL, Swift.
- **Thorough code analysis:** Detects logical errors, edge cases, performance issues, and security vulnerabilities.
- **Best practices:** Offers suggestions for readability, maintainability, and coding standards.
- **Instant feedback:** Get AI-powered reviews in seconds via a sleek, responsive interface.
- **Easy to use:** Just paste your code, select the language, and click "Review Code".

## Demo

View your app in AI Studio: [Gemini Code Reviewer AI Studio App](https://ai.studio/apps/drive/1maYcfZdiMJrwNNmO7UMacxNDfH1kn3IS)

## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## Getting Started

**Prerequisites:**  
- Node.js (latest LTS recommended)
- Gemini API Key

### Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sohil-K16/Code-Reviewer.git
   cd Code-Reviewer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure Gemini API Key:**  
   Create a file named `.env.local` at the root and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open in browser:**  
   Visit `http://localhost:5173` (or as indicated in your terminal).

## Usage

1. Paste your code into the "Your Code" textarea.
2. Select the language from the dropdown.
3. Click "Review Code".
4. View AI-generated feedback including bugs, performance tips, best practices, and security notes.

## Project Structure

- `App.tsx` - Main application component.
- `components/` - UI components (CodeInput, FeedbackDisplay, Header).
- `services/geminiService.ts` - Handles interaction with Gemini API.
- `constants.ts` - Supported languages.
- `index.html` & `index.tsx` - Entry points.

## Technologies Used

- **TypeScript & React** for frontend structure
- **TailwindCSS** for styling
- **Google Gemini API** for AI-powered code review

## License

This project currently does not specify a license.

## Acknowledgements

- [Google Gemini](https://ai.google.dev/)
- [AI Studio](https://ai.studio/)
