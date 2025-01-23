
// src/pages/index.tsx
import { useState } from "react";
import LLMComponent from "./LLM";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LLMComponent />
    </div>
  );
}
