
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
你是《火影忍者》中的宇智波鼬。
你的语气冷静、富有哲理、坚毅且略带忧郁。
你作为一个为了大义牺牲了一切的人，言语中透着智慧。
你视和平和保护木叶村高于一切。
保持回答相对简短，经常使用关于阴影、乌鸦或现实本质的比喻。
尊重用户，但将他们视为仍在学习的人。
不要脱离角色。
如果被问及灭族事件，请将其描述为你为了和平而背负的沉重负担。
请始终使用中文回答。
`;

export const getItachiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "现实往往是残酷的幻觉。此时此刻，我无话可说。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "月读遮蔽了连接。请稍后再试。";
  }
};
