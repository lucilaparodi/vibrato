const BASE_URL = "https://api.genius.com";
const API_KEY =
  "GW99XuIllyFCSqItFu2AR6kYHHmG7_VmBBuf4bd2wb_mlLu2bRWt4UWlVjNLRl0ypGEqpjo7Gvzi9qC5_FQuUA"; // Reemplaza con tu token de Genius

// Función para buscar canciones y obtener un enlace a su letra
export async function searchLyrics({ artist, title }) {
  try {
    // Realiza una búsqueda en Genius
    const response = await fetch(
      `${BASE_URL}/search?q=${encodeURIComponent(title)} ${encodeURIComponent(
        artist
      )}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = await response.json();

    // Verifica si hay resultados
    if (data.response.hits.length === 0) {
      throw new Error("No se encontraron resultados.");
    }

    // Obtiene el primer resultado de la búsqueda
    const song = data.response.hits[0].result;

    return {
      title: song.title,
      artist: song.primary_artist.name,
      url: song.url, // URL a Genius donde se encuentra la letra
    };
  } catch (error) {
    console.error("Error al buscar la canción en Genius:", error);
    return null; // En caso de error, retorna null
  }
}
