import { createServer } from 'node:http';
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, resolve, extname, sep } from 'node:path';

const root = process.cwd();
const dataDir = process.env.DATA_DIR || join(root, 'data');
const dataFile = join(dataDir, 'site-data.json');
const password = process.env.ADMIN_PASSWORD;
const sessions = new Map();
const maxBodySize = 8 * 1024 * 1024;

if (!password) {
  console.error('Missing ADMIN_PASSWORD. Create a .env file or set ADMIN_PASSWORD before starting the server.');
  process.exit(1);
}

if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

const defaultData = {
  title: 'ইতালীয় ভাষা এখন<br><span>আপনার ভাষায়।</span>',
  text: 'দৈনন্দিন কথা বলা, কাজের জন্য দরকারি ইতালীয় এবং গ্রামার—একটি সহজ ও গোছানো শেখার পথে এগিয়ে যান।',
  whatsapp: '+393508090541',
  images: [],
  pdfs: [
    { id: 1, title: 'Italiano A1–A2 গ্রামার শিট', url: '#' },
    { id: 2, title: 'দৈনন্দিন ৫০০টি ইতালীয় শব্দ', url: '#' },
  ],
  videos: [],
};

function readData() {
  if (!existsSync(dataFile)) return defaultData;
  try { return JSON.parse(readFileSync(dataFile, 'utf8')); } catch { return defaultData; }
}

function writeData(data) {
  writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
}

function json(res, status, data, extra = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', ...extra });
  res.end(JSON.stringify(data));
}

function getCookie(req, name) {
  const source = req.headers.cookie || '';
  return source.split(';').map(value => value.trim()).find(value => value.startsWith(`${name}=`))?.slice(name.length + 1);
}

function authenticated(req) {
  const token = getCookie(req, 'nostro_admin');
  const expires = token && sessions.get(token);
  if (!expires || expires < Date.now()) {
    if (token) sessions.delete(token);
    return false;
  }
  return true;
}

function requestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > maxBodySize) reject(new Error('Request is too large'));
    });
    req.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); } catch { reject(new Error('Invalid JSON')); }
    });
  });
}

function validData(data) {
  return data && typeof data === 'object'
    && typeof data.title === 'string' && typeof data.text === 'string'
    && typeof data.whatsapp === 'string'
    && Array.isArray(data.images) && Array.isArray(data.pdfs) && Array.isArray(data.videos);
}

const mimeTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon' };

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/site-data' && req.method === 'GET') return json(res, 200, readData());
  if (url.pathname === '/api/session' && req.method === 'GET') return json(res, 200, { authenticated: authenticated(req) });

  if (url.pathname === '/api/login' && req.method === 'POST') {
    try {
      const { password: attempt = '' } = await requestBody(req);
      const expected = createHash('sha256').update(password).digest();
      const received = createHash('sha256').update(String(attempt)).digest();
      if (!timingSafeEqual(expected, received)) return json(res, 401, { error: 'Invalid password' });
      const token = randomBytes(32).toString('hex');
      sessions.set(token, Date.now() + 8 * 60 * 60 * 1000);
      return json(res, 200, { ok: true }, { 'Set-Cookie': `nostro_admin=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800` });
    } catch { return json(res, 400, { error: 'Invalid request' }); }
  }

  if (url.pathname === '/api/logout' && req.method === 'POST') {
    const token = getCookie(req, 'nostro_admin');
    if (token) sessions.delete(token);
    return json(res, 200, { ok: true }, { 'Set-Cookie': 'nostro_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0' });
  }

  if (url.pathname === '/api/site-data' && req.method === 'PUT') {
    if (!authenticated(req)) return json(res, 401, { error: 'Unauthorized' });
    try {
      const data = await requestBody(req);
      if (!validData(data)) return json(res, 400, { error: 'Invalid site data' });
      writeData(data);
      return json(res, 200, { ok: true });
    } catch (error) { return json(res, 400, { error: error.message }); }
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: 'Method not allowed' });
  let relativePath;
  try { relativePath = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^\/+/, ''); }
  catch { return json(res, 400, { error: 'Invalid path' }); }
  const publicFiles = new Set(['index.html', 'admin.html', 'languages.js', 'video.js']);
  const filePath = resolve(root, relativePath);
  const publicRoot = resolve(root, 'public') + sep;
  const isPublicAsset = filePath.startsWith(publicRoot) && !relativePath.split(/[\\/]/).some(part => part.startsWith('.'));
  if ((!publicFiles.has(relativePath) && !isPublicAsset) || !existsSync(filePath) || !statSync(filePath).isFile()) return json(res, 404, { error: 'Not found' });
  const type = mimeTypes[extname(filePath).toLowerCase()] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  res.end(readFileSync(filePath));
}).listen(process.env.PORT || 3000, () => console.log(`Nostro Lingua LAB is running on http://localhost:${process.env.PORT || 3000}`));
