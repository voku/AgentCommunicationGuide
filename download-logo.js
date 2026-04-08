import fs from 'fs';
import https from 'https';

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

const prompt = "A professional minimalist logo for an Agent Communication Guide application combining coding brackets and AI sparks clean lines modern tech aesthetic blue and dark gray colors white background vector art style flat design suitable for a web app header";
const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&nologo=true`;

https.get(url, (res) => {
  const file = fs.createWriteStream('public/logo.jpg');
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Logo downloaded successfully');
  });
}).on('error', (err) => {
  console.error('Error downloading logo:', err.message);
});
