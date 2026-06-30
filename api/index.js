import fs from 'node:fs';
import path from 'node:path';
// We'll use a dynamic import to avoid issues with missing files during build/deployment initialization
// and to ensure we're loading the correct bundle.

export default async function handler(req, res) {
  const url = req.url;
  const distPath = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distPath, 'client', 'index.html');
  const serverEntryPath = path.join(distPath, 'server', 'entry-server.js');
  
  try {
    if (!fs.existsSync(templatePath)) {
      return res.status(500).send(`Template not found at ${templatePath}. Ensure the build command includes 'npm run build:client'.`);
    }

    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Dynamically import the render function from the server bundle
    const { render } = await import(serverEntryPath);
    
    const appHtml = await render(url);
    const html = template.replace('<!--ssr-outlet-->', () => appHtml);
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send(`SSR Error: ${error.message}`);
  }
}
