
import type { NextApiRequest, NextApiResponse } from "next";

interface LLMRequest {
  input: string;
}

interface LLMResponse {
  text: string;
  json?: Record<string, any>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body as LLMRequest;

  // Mock response, replace with real LLM integration logic.
  const mockResponse: LLMResponse = {
    text: `Echoing input: ${input}`,
    json: { echoed: input },
  };

  res.status(200).json(mockResponse);
}

export async function GET(request: Request) {
  return new Response('Hello, from API!');
}
