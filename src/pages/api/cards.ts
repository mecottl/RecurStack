// src/pages/api/cards.ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.SUPABASE_URL!,
  import.meta.env.SUPABASE_ANON_KEY!
);

// GET /api/cards
export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .order('is_favorite', { ascending: false });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
};

// POST /api/cards
export const POST: APIRoute = async ({ request }) => {
  const payload = await request.json();
  const { data, error } = await supabase
    .from('cards')
    .insert([{ ...payload, is_favorite: false }])
    .select()
    .single();
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 201 });
};
