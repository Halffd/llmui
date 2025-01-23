import React, { useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react'; // Install this package

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [previousChats, setPreviousChats] = useState<string[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    const savedChats = localStorage.getItem('chats');
    if (savedChats) {
      setMessages(JSON.parse(savedChats));
    }
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = `User: ${input}`;
      const botResponse = `Bot: Response to "${input}"`;
      const updatedMessages = [...messages, newMessage, botResponse];
      
      setMessages(updatedMessages);
      setInput('');
      localStorage.setItem('chats', JSON.stringify(updatedMessages));
    }
  };

  const handleEmojiClick = (emoji: { emoji: string }) => {
    setInput((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-blue-50">
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded shadow">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">{msg}</div>
        ))}
      </div>
      <div className="flex mt-4">
        <button onClick={() => setShowEmojiPicker((prev) => !prev)} className="p-2">
          😊
        </button>
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 text-white bg-blue-600 rounded"
        >
          Send
        </button>
      </div>
      <div className="bg-gray-200 p-2 rounded">
        <h2 className="text-lg font-bold">Previous Chats</h2>
        <ul>
            {previousChats.map((chat, index) => (
            <li key={index} className="cursor-pointer" onClick={() => setMessages([...messages, chat])}>
                {chat}
            </li>
            ))}
        </ul>
        </div>
    </div>
    
  );
};

export default Chatbot;