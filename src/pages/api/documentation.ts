// Importamos los datos documentation desde el archivo central
import { documentationData } from '../../lib/data';

// Creamos un endpoint REST con el método GET
export function GET({ url }: { url: URL }) {
  // Leemos el parámetro ?q= de la URL (ej: /api/documentation?q=flex)
  const query = url.searchParams.get('q')?.toLowerCase();

  // Por defecto, devolvemos todos los datos
  let results = documentationData;

  // Si hay una búsqueda (query), filtramos por título, autor o descripción
  if (query) {
    results = documentationData.filter(card =>
      card.title.toLowerCase().includes(query) ||
      card.description.toLowerCase().includes(query) ||
      card.author.toLowerCase().includes(query)
    );
  }

  // Devolvemos los datos en formato JSON con cabecera de tipo application/json
  return new Response(
    JSON.stringify(results),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
