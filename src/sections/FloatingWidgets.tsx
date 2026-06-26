"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Sparkles, X, Send, Bot, User, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWidgets() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste! I am your Ojas Wellness Assistant. How can I help you on your wellness journey today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const officialWhatsAppSvg = (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.926 14.136.91 11.513.91c-5.437 0-9.863 4.42-9.866 9.863 0 1.765.483 3.488 1.398 5.017l-.988 3.606 3.7.97a9.79 9.79 0 0 0 4.29-1.212zm9.957-6.529c-.279-.14-1.651-.815-1.906-.907-.255-.093-.441-.14-.627.14-.186.279-.718.907-.881 1.092-.163.186-.325.21-.604.07-.279-.14-1.18-.435-2.247-1.387-.83-.74-1.39-1.653-1.553-1.932-.163-.279-.017-.43.122-.569.124-.125.279-.326.419-.489.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.489-.069-.14-.627-1.512-.86-2.07-.227-.546-.456-.472-.627-.48l-.534-.01c-.186 0-.489.07-.745.349-.256.279-.978.955-.978 2.33 0 1.375 1.002 2.702 1.142 2.887.14.186 1.972 3.01 4.777 4.217.667.287 1.189.459 1.597.589.67.213 1.28.183 1.762.111.537-.08 1.651-.675 1.883-1.326.232-.651.232-1.21.163-1.325-.069-.115-.255-.185-.534-.326z" />
    </svg>
  );

  const quickReplies = [
    { text: "What is my Dosha?", reply: "In Ayurveda, there are three primary energy patterns: Vata (Air/Ether), Pitta (Fire/Water), and Kapha (Earth/Water). I can help you identify your dominant dosha through a quick consultation! Please book a free session with our Ayurvedic doctor." },
    { text: "Remedy for Acidity", reply: "For immediate relief from acidity: Drink half a cup of cold milk with a pinch of fennel powder, or chew on organic cardamoms. Avoid sour, spicy, and fermented foods. Consider consultation if it is chronic." },
    { text: "Book Consultation", reply: "Excellent! You can schedule a free online audio/video consultation with our certified doctors using the appointment form on this page. Just scroll to the form or click here to book now!" },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Thank you for reaching out. Our Ayurvedic and Homeopathic experts are available to guide you. Would you like to schedule a free detailed call with them?";
      
      const normalized = text.toLowerCase();
      if (normalized.includes("dosha")) {
        botResponse = quickReplies[0].reply;
      } else if (normalized.includes("acidity") || normalized.includes("digestion")) {
        botResponse = quickReplies[1].reply;
      } else if (normalized.includes("book") || normalized.includes("consult")) {
        botResponse = quickReplies[2].reply;
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Digital Assistant Chat Modal */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[330px] sm:w-[360px] h-[450px] sm:h-[480px] bg-white rounded-2xl shadow-2xl border border-[#F3F4F6] flex flex-col overflow-hidden pointer-events-auto mb-2"
          >
            {/* Header */}
            <div className="bg-[#028174] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold leading-tight">Ojas Wellness Guide</h4>
                  <span className="text-[10px] text-white/75 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online | Ayurvedic Expert
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsAiOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FFF8]/40 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                      msg.sender === "user"
                        ? "bg-[#E6F3F2] text-[#028174]"
                        : "bg-[#028174] text-white"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#028174] text-white rounded-tr-none"
                        : "bg-white text-[#374151] border border-[#F3F4F6] rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 max-w-[80%] mr-auto">
                  <div className="w-7 h-7 rounded-full bg-[#028174] text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-[#F3F4F6] p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#9CA3AF] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#9CA3AF] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#9CA3AF] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 bg-[#F8FFF8]/40 border-t border-[#F3F4F6]/50">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.text}
                    onClick={() => handleSend(reply.text)}
                    className="text-[10px] font-bold text-[#028174] bg-white border border-[#E6F3F2] px-2.5 py-1.5 rounded-full hover:bg-[#F4FAF9] transition-colors cursor-pointer"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-[#F3F4F6] bg-white flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Ojas Wellness about health..."
                className="flex-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-3 text-xs focus:outline-none focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-[#028174] hover:bg-[#01695F] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Widgets Action Container (Pointer events auto to allow interaction) */}
      <div className="flex flex-col gap-4 pointer-events-auto">
        {/* 1. Digital Health Assistant Floating Circular Button */}
        <div className="relative group flex justify-end">
          <motion.button
            onClick={() => setIsAiOpen(!isAiOpen)}
            className="w-14 h-14 rounded-full bg-[#028174] text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 relative cursor-pointer"
            aria-label="Open Wellness Assistant"
            animate={{
              boxShadow: [
                "0 4px 20px rgba(2, 129, 116, 0.2)",
                "0 4px 30px rgba(2, 129, 116, 0.4)",
                "0 4px 20px rgba(2, 129, 116, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-6 h-6 animate-pulse" />
          </motion.button>

          {/* Hover Tooltip */}
          <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-white text-[#1F2937] text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg border border-[#F3F4F6] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 whitespace-nowrap">
            Wellness Assistant • Start a conversation
          </span>
        </div>

        {/* 2. Official WhatsApp Floating Logo Button */}
        <div className="relative group flex justify-end">
          <motion.a
            href="https://wa.me/919766548692"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[60px] md:h-[60px] bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-[1.08] active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            {officialWhatsAppSvg}
          </motion.a>

          {/* Hover Tooltip */}
          <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-white text-[#1F2937] text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg border border-[#F3F4F6] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </div>

    </div>
  );
}
