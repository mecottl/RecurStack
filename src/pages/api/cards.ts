// src/pages/api/cards.ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

// GET /api/cards → lista todas las cards
export const get: APIRoute = async () => {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .order('is_favorite', { ascending: false })
    .order('inserted_at', { ascending: false });
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { status: 200 });
};

// POST /api/cards → crea una nueva card
export const post: APIRoute = async ({ request }) => {
  const payload = await request.json();
  const { data, error } = await supabase
    .from('cards')
    .insert([{ ...payload, is_favorite: false }]);
  if (error) return new Response(error.message, { status: 500 });
  if (!data) return new Response("No se recibió respuesta de la bdd", {status: 500})
  return new Response(JSON.stringify(data[0]), { status: 201 });
};
