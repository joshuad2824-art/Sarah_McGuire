// GET    /api/image/:id          → an uploaded photo (public)
// POST   /api/image?slot=KEY     → upload a photo into a photo slot (admin only; body is the image)
// DELETE /api/image?slot=KEY     → clear a photo slot back to its placeholder (admin only)
import { randomUUID } from 'node:crypto';
import { json, isAdmin, readContent, writeContent, imageStore } from '../lib/admin.mjs';

const MAX_BYTES = 4.5 * 1024 * 1024;
const TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ID = /^[0-9a-f-]{36}$/;

export default async (req, context) => {
  const id = context.params && context.params.id;

  if (req.method === 'GET') {
    if (!id || !ID.test(id)) return new Response('Not found', { status: 404 });
    const found = await imageStore().getWithMetadata(id, { type: 'arrayBuffer' });
    if (!found) return new Response('Not found', { status: 404 });
    return new Response(found.data, {
      headers: {
        'Content-Type': (found.metadata && found.metadata.contentType) || 'image/jpeg',
        // Each upload gets a new id, so a photo at a given address never changes.
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }

  if (req.method !== 'POST' && req.method !== 'DELETE') return json({ error: 'Method not allowed' }, 405);
  if (!isAdmin(req)) return json({ error: 'Please log in again.' }, 401);

  const slot = new URL(req.url).searchParams.get('slot');
  if (!slot || slot.length > 200) return json({ error: 'Bad request' }, 400);

  const store = imageStore();
  const content = await readContent();
  const previous = content.images[slot];

  if (req.method === 'POST') {
    const type = (req.headers.get('content-type') || '').split(';')[0].trim();
    if (!TYPES.includes(type)) return json({ error: 'Please upload a JPEG, PNG or WebP image.' }, 415);
    const data = await req.arrayBuffer();
    if (!data.byteLength) return json({ error: 'The image was empty.' }, 400);
    if (data.byteLength > MAX_BYTES) return json({ error: 'That image is too large.' }, 413);

    const newId = randomUUID();
    await store.set(newId, data, { metadata: { contentType: type, slot } });
    content.images[slot] = newId;
  } else {
    delete content.images[slot];
  }

  const saved = await writeContent(content);
  if (previous) await store.delete(previous);
  return json(saved);
};

export const config = { path: ['/api/image', '/api/image/:id'] };
