import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

// Local preview of the production export; not a public production server.
const root = path.resolve('out');
const port = Number(process.env.PORT || process.argv[2] || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
await stat(path.join(root, 'index.html'));
createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = pathname.replace(/^\/+/, '');
    const candidates = [relative, `${relative}.html`, path.join(relative, 'index.html')];
    for (const candidate of candidates) {
      const file = path.resolve(root, candidate);
      if (!file.startsWith(`${root}${path.sep}`)) continue;
      try {
        if (!(await stat(file)).isFile()) continue;
        const body = await readFile(file);
        res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Content-Length': body.length });
        res.end(req.method === 'HEAD' ? undefined : body); return;
      } catch { /* Try the next static route. */ }
    }
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : await readFile(path.join(root, '404.html')));
  } catch { res.writeHead(400); res.end('Bad request'); }
}).listen(port, '127.0.0.1', () => console.log(`Production preview: http://127.0.0.1:${port}`));
