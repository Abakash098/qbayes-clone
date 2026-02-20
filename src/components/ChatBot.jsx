import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaRobot, FaUser, FaTrash, FaExternalLinkAlt } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from 'react-router-dom'; // Added for page navigation

const API_KEY = "AIzaSyDipDXflRvBcr0jjekr1dcNNUIDLrlvb34"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const ChatBot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  
  // Updated Initial Message to include "actions"
  const [messages, setMessages] = useState([
    { 
      role: "bot", 
      text: "Hi! I'm your Bayes AI assistant. How may I help you?",
      actions: [
        { label: "About QBayes", path: "/about" },
        { label: "Our Services", path: "/services" },
        { label: "Contact Us", path: "/#contact" },
        { label: "Support Option", path: "/misc/academics" }
      ]
    }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const clearChat = () => {
    setMessages([{ 
      role: "bot", 
      text: "How else can I help you?",
      actions: [
        { label: "About QBayes", path: "/about" },
        { label: "Our Services", path: "/services" },
        { label: "Contact Us", path: "/#contact" }
      ]
    }]);
  };

  // Function to handle clicking on the intersection buttons
  const handleActionClick = (path) => {
    setIsOpen(false); // Optional: Close chatbot when navigating
    if (path.startsWith('/#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "You are the Bayes AI Assistant. Bayes is a tech agency specializing in Web, App, and AI solutions. Be professional and concise. Do not use markdown." }],
          },
          {
            role: "model",
            parts: [{ text: "Understood. I am the Bayes AI assistant." }],
          },
        ],
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      setMessages([...updatedMessages, { role: "bot", text: response.text() }]);
    } catch (error) {
      if (error.message?.includes("429")) {
         setMessages([...updatedMessages, { role: "bot", text: "I'm receiving too many messages. Please wait 60 seconds." }]);
      } else {
         setMessages([...updatedMessages, { role: "bot", text: "I'm having trouble connecting. Please try again." }]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-100 animate-fadeIn">
          
          {/* Header */}
          <div className="bg-[#020b24] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg rotate-3">
                <FaRobot size={20} className="-rotate-3" />
              </div>
              <h3 className="font-bold text-lg leading-none">Bayes AI</h3>
            </div>
            <button onClick={clearChat} className="text-slate-400 hover:text-red-400 transition-colors p-2">
              <FaTrash size={14} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8fafc] scroll-smooth custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-white text-orange-500'}`}>
                    {msg.role === 'user' ? <FaUser size={12}/> : <FaRobot size={14}/>}
                  </div>
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${msg.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'}`}>
                    {msg.text}
                  </div>
                </div>

                {/* --- INTERSECTION BUTTONS (Quick Actions) --- */}
                {msg.actions && (
                  <div className="ml-11 mt-3 w-[80%] bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                    {msg.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(action.path)}
                        className="w-full text-left px-5 py-3 text-[#4a90e2] text-sm font-medium hover:bg-blue-50 border-b border-slate-50 last:border-none transition-colors flex justify-between items-center group"
                      >
                        {action.label}
                        <FaExternalLinkAlt size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && <div className="text-xs text-slate-400 animate-pulse ml-11">AI is thinking...</div>}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-50">
            <div className="flex items-center gap-2 bg-slate-100 rounded-full pl-5 pr-2 py-2 border border-transparent focus-within:border-orange-200 transition-all">
              <input 
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Bayes..." 
                className="flex-1 bg-transparent py-2 text-sm focus:outline-none"
              />
              <button onClick={handleSend} disabled={isTyping || !input.trim()} className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }`}</style>
    </div>
  );
};

export default ChatBot;