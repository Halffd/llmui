// 3. Create an LLM component:
// src/components/LLMComponent.tsx
import { useState } from "react";

interface LLMResponse {
  text: string;
  json?: Record<string, any>;
}

const LLMComponent = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<LLMResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const data: LLMResponse = await res.json();
      setResponse(data);
    } catch (err) {
      console.error("Error fetching LLM response", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
      <h1 className="text-xl font-bold mb-4">LLM Interface</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-2 px-4 rounded text-white font-bold ${
          loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
      {response && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Response:</h2>
          <pre className="bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default LLMComponent;
