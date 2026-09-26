// Shared helpers for the admin API: passphrase check, session tokens and the
// content store.
//
// The admin passphrase is read from the ADMIN_PASSPHRASE environment variable
// (set in Netlify: Project configuration → Environment variables). It is never
// stored in the code. Changing it signs every admin out.
import { createHmac, timingSafeEqual } from 'node:crypto';
import { getStore } from '@netlify/blobs';

const SESSION_HOURS = 12;

export const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers }
  });

function passphrase() {
  const p = process.env.ADMIN_PASSPHRASE;
  return p && p.length ? p : null;
}

function sign(value, secret) {
  return createHmac('sha256', 'smb-admin-session:' + secret).update(value).digest('hex');
}

function sameText(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}

export function adminConfigured() {
  return passphrase() !== null;
}

// Ignores spaces around the passphrase, which phone keyboards and password
// managers sometimes add.
export function checkPassphrase(given) {
  const p = passphrase();
  return p !== null && typeof given === 'string' && sameText(given.trim(), p.trim());
}

export function createSession() {
  const expiresAt = Date.now() + SESSION_HOURS * 3600 * 1000;
  const value = String(expiresAt);
  return { token: value + '.' + sign(value, passphrase()), expiresAt };
}

// Returns true when the request carries a valid, unexpired session token.
export function isAdmin(req) {
  const p = passphrase();
  const header = req.headers.get('authorization') || '';
  const m = /^Bearer (\d+)\.([0-9a-f]{64})$/.exec(header);
  if (!p || !m) return false;
  if (Number(m[1]) < Date.now()) return false;
  return sameText(m[2], sign(m[1], p));
}

// Site content: { text: { key: string }, images: { slotKey: imageId } }.
export const contentStore = () => getStore({ name: 'site-content', consistency: 'strong' });
export const imageStore = () => getStore({ name: 'site-images', consistency: 'strong' });

export async function readContent() {
  const data = await contentStore().get('content', { type: 'json' });
  return {
    text: (data && data.text) || {},
    images: (data && data.images) || {},
    updatedAt: (data && data.updatedAt) || null
  };
}

export async function writeContent(content) {
  content.updatedAt = new Date().toISOString();
  await contentStore().setJSON('content', content);
  return content;
}
