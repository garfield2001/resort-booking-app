"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { defaultFaqData } from "./faq-data";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hi there! 👋 I'm the London Beach Virtual Assistant. How can I help you today? You can ask me about day tours, cottages, or room rates!",
    sender: "bot",
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now(), text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simulate bot thinking and responding
    setTimeout(() => {
      const response = generateBotResponse(userMsg.text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: response, sender: "bot" }]);
    }, 600);
  };

  const generateBotResponse = (input: string) => {
    const text = input.toLowerCase();
    
    // Check our external JSON/Config file for a matching keyword
    for (const rule of defaultFaqData) {
      if (rule.keywords.some(keyword => text.includes(keyword))) {
        return rule.response;
      }
    }
    
    return "Thanks for reaching out! To give you the most accurate answer, please click the 'Ask a Question' button on our site or leave your contact info and our front desk will call you shortly.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={22} />
              <div>
                <div className="font-bold text-sm">Resort Assistant</div>
                <div className="text-xs text-primary-foreground/80 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${msg.sender === "user" ? "bg-accent text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about rates, cottages..."
              className="flex-1 bg-gray-100 text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30 transition-all text-gray-900"
            />
            <button 
              onClick={handleSend}
              className="bg-primary text-white p-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl shadow-accent/40 hover:scale-105 hover:bg-accent/90 transition-all"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
