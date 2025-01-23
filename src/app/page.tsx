// src/app/page.tsx
"use client"; // This marks the component as a Client Component

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<string[]>(['Welcome to the Chatbot!']);

    // Simulate loading for 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleSendMessage = () => {
        const newMessage = "Hello from the Chatbot!";
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
        >
            {loading ? (
                <motion.div
                    className="loading-circle"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: '5px solid #0070f3',
                        borderTopColor: 'transparent',
                        margin: '20px auto',
                    }}
                />
            ) : (
                <div>
                    <motion.div
                        className="wobbly-text"
                        animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 2, -2, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: "easeInOut",
                        }}
                        style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
                    >
                        Chatbot Activated!
                    </motion.div>
                    
                    <motion.div
                        className="message-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                className="chat-message"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
                                style={{
                                    padding: '10px',
                                    margin: '10px 0',
                                    borderRadius: '5px',
                                    backgroundColor: '#f0f0f0',
                                    maxWidth: '300px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                            >
                                {msg}
                            </motion.div>
                        ))}
                    </motion.div>
                    <button onClick={handleSendMessage} style={{ marginTop: '20px' }}>
                        Send Message
                    </button>
                    
                    <motion.div
                        className="fire-effect"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'orange',
                            borderRadius: '50%',
                            position: 'relative',
                            margin: '20px auto'
                        }}
                    />
                </div>
            )}
        </motion.div>
    );
}