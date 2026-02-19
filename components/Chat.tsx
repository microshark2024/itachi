
import React, { useState, useRef, useEffect } from 'react';
import { getItachiResponse } from '../services/geminiService';
import { Message } from '../types';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'itachi', content: "乌鸦传来了你抵达的消息。在这漆黑的夜里，你追求的是什么？" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getItachiResponse(input);
    const itachiMsg: Message = { role: 'itachi', content: response };
    setMessages(prev => [...prev, itachiMsg]);
    setLoading(false);
  };

  return (
    <section className="py-24 px-4 bg-zinc-950 border-t border-red-900/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-cinzel text-white mb-2">乌鸦的低语</h2>
          <p className="text-gray-500 text-sm">向宇智波的天才寻求指引。</p>
        </div>

        <div className="bg-black border border-red-900/30 rounded-lg overflow-hidden flex flex-col h-[500px]">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-red-900/20 border border-red-700/30 text-red-100' 
                    : 'bg-zinc-900 border border-zinc-800 text-gray-300'
                }`}>
                  {msg.role === 'itachi' && <span className="block text-[10px] font-bold text-red-600 mb-1 uppercase tracking-widest">鼬</span>}
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 rounded-lg animate-pulse text-zinc-600 text-xs">
                  化为乌鸦消散中...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-red-900/20 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="寻求智慧..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-all text-sm font-bold disabled:opacity-50"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
