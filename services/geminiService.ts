
export async function reviewCode(code: string, language: string): Promise<string> {
  try {
    const response = await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, language }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
      throw new Error(errorData.error || `Request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!data.feedback) {
      throw new Error("Invalid response format from server.");
    }
    
    return data.feedback;
  } catch (error) {
    console.error("Error calling backend API:", error);
    if (error instanceof Error) {
        throw new Error(`API Communication Error: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the backend.");
  }
}