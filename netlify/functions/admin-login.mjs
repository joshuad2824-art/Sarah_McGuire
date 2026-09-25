// POST /api/admin/login  { passphrase } → { token, expiresAt }
import { json, adminConfigured, checkPassphrase, createSession } from '../lib/admin.mjs';

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  if (!adminConfigured()) return json({ error: 'Admin is not set up yet (ADMIN_PASSPHRASE is missing).' }, 503);

  let body;
  try { body = await req.json(); } catch { return json({ error: 'Bad request' }, 400); }

  if (!checkPassphrase(body && body.passphrase)) {
    // Slow down guessing a little.
    await new Promise((r) => setTimeout(r, 600));
    return json({ error: "That passphrase didn't work." }, 401);
  }
  return json(createSession());
};

export const config = { path: '/api/admin/login' };
