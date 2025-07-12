import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.SUPABASE_URL!,
  import.meta.env.SUPABASE_ANON_KEY!
);

export const get: APIRoute = async () => {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .order('is_favorite', { ascending: false });
  if (error) throw error;
  return new Response(JSON.stringify(data));
};

export const post: APIRoute = async ({ request }) => {
  const payload = await request.json();
  const { data, error } = await supabase
    .from('cards')
    .insert([{ ...payload, is_favorite: false }])
    .select()
    .single();
  if (error) throw error;
  return new Response(JSON.stringify(data), { status: 201 });
};
