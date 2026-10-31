import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
try { await stat(path.join(root, 'index.html')); } catch { console.error('Run npm run build (or node build.mjs) before serving.'); process.exit(1); }
createServer(async (req, res) => {
 const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
 const relative = pathname === '/' ? 'index.html' : pathname.slice(1); const target = path.resolve(root, relative);
 if (!target.startsWith(`${root}${path.sep}`) && target !== root) { res.writeHead(403).end('Forbidden'); return; }
 try { const body = await readFile(target); res.writeHead(200, { 'Content-Type': types[path.extname(target)] ?? 'application/octet-stream' }); res.end(body); }
 catch { res.writeHead(404).end('Not found'); }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log(`Serving ${root} at http://127.0.0.1:${process.env.PORT || 4173}`));
