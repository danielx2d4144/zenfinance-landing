import fs from 'node:fs';
import path from 'node:path';
import { render } from '../dist/server/entry-server.js';

export default async function handler(req, res) {
  const url = req.url;
  const templatePath = path.resolve(process.cwd(), 'dist/client/index.html');
  
  try {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const appHtml = await render(url);
    const html = template.replace('<!--ssr-outlet-->', appHtml);
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
