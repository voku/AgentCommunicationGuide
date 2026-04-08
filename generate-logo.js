import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function generateLogo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  console.log("Generating logo...");
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A professional, minimalist logo for an "Agent Communication Guide" application. The logo should combine elements of coding (like brackets or a terminal) and AI agents (like a spark, brain, or robot). Clean lines, modern tech aesthetic, blue and dark gray colors, white background. Vector art style, flat design, suitable for a web app header.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64EncodeString = part.inlineData.data;
      fs.writeFileSync('public/logo.png', Buffer.from(base64EncodeString, 'base64'));
      console.log('Logo generated and saved to public/logo.png');
      return;
    }
  }
}

generateLogo().catch(console.error);
