// GET  /api/content                      → the site's edited text and photos (public)
// POST /api/content  { text: { key: value | null } }  → save text edits (admin only)
//      A null value restores that text to what the page file says.
import { json, isAdmin, readContent, writeContent } from '../lib/admin.mjs';

const MAX_KEY = 1200;
const MAX_VALUE = 6000;
const MAX_ENTRIES = 3000;

export default async (req) => {
  if (req.method === 'GET') return json(await readContent());
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  if (!isAdmin(req)) return json({ error: 'Please log in again.' }, 401);

  let body;
  try { body = await req.json(); } catch { return json({ error: 'Bad request' }, 400); }
  const edits = body && body.text;
  if (!edits || typeof edits !== 'object' || Array.isArray(edits)) return json({ error: 'Bad request' }, 400);

  const content = await readContent();
  for (const [key, value] of Object.entries(edits)) {
    if (key.length > MAX_KEY) return json({ error: 'Bad request' }, 400);
    if (value === null) { delete content.text[key]; continue; }
    if (typeof value !== 'string' || value.length > MAX_VALUE) return json({ error: 'That text is too long.' }, 400);
    content.text[key] = value;
  }
  if (Object.keys(content.text).length > MAX_ENTRIES) return json({ error: 'Too many edits.' }, 400);

  return json(await writeContent(content));
};

export const config = { path: '/api/content' };
