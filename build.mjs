import { cp, mkdir, readFile, rm, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');
const assets = ['index.html', 'styles.css', 'showcase.css', 'app.js', 'api-client.js'];
let failed = false;
function fail(message) { failed = true; console.error(`Build validation failed: ${message}`); }
for (const file of ['app.js', 'api-client.js']) {
 try { new Function(await readFile(path.join(root, file), 'utf8')); }
 catch (error) { fail(`${file} syntax check failed: ${error.message}`); }
}
const html = await readFile(path.join(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
 const ref = match[1]; if (/^(?:https?:|data:|\/\/)/i.test(ref)) continue;
 const localPath = path.resolve(root, ref.split('?')[0]);
 if (!localPath.startsWith(`${root}${path.sep}`) && localPath !== root) { fail(`local reference escapes project: ${ref}`); continue; }
 try { await stat(localPath); } catch { fail(`missing local asset referenced by index.html: ${ref}`); }
}
for (const file of assets) try { await stat(path.join(root, file)); } catch { fail(`required asset is missing: ${file}`); }
if (failed) process.exit(1);
await rm(output, { recursive: true, force: true }); await mkdir(output, { recursive: true });
for (const file of assets) await cp(path.join(root, file), path.join(output, file));
console.log(`Built static marketplace into ${output}`);
