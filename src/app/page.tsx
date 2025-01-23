// src/app/page.tsx
"use client"; // This marks the component as a Client Component

import { motion } from 'framer-motion';
import Chatbot from './Chatbot';

const Index = () => {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-2xl font-bold text-center">LLMUI Chatbot</h1>
      <Chatbot />
    </div>
  );
};

export default Index;