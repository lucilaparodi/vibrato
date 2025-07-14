import React, { useState } from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

// We'll hardcode the base URL to the external API.
// This replaces the "/api" proxy-based path.
const API_BASE_URL = "https://api.lyrics.ovh";

function LyricsSearch({ onLyricsChange }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [lyrics, setLyrics] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // If there's no text, clear everything
    if (!value) {
      setSuggestions([]);
      setLyrics("");
      setSelectedSong(null);
      onLyricsChange("");
      return;
    }

    fetchSuggestions(value);
  };

  // Fetch suggestions directly from the external API
  const fetchSuggestions = async (query) => {
    try {
      // Note the direct call to the external API
      const response = await fetch(`${API_BASE_URL}/suggest/${query}`);
      const data = await response.json();

      // Take the first 10 results and map them
      const results = data.data.slice(0, 10).map((result) => ({
        display: result.title + " - " + result.artist.name,
        artist: result.artist.name,
        title: result.title,
      }));

      setSuggestions(results);
    } catch (error) {
      console.error("Error al obtener sugerencias:", error);
    }
  };

  // Fetch lyrics directly from the external API
  const fetchLyrics = async (song) => {
    try {
      setLoading(true);

      // Note the direct call to the external API
      const response = await fetch(
        `${API_BASE_URL}/v1/${encodeURIComponent(
          song.artist
        )}/${encodeURIComponent(song.title)}`
      );
      const data = await response.json();

      let newLyrics = data.lyrics || "No se encontraron letras.";
      newLyrics = newLyrics
        .replace(/\r\n/g, "\n") // Convert Windows newlines to Unix
        .replace(/\n\s*\n/g, "\n"); // Remove repeated blank lines

      setLyrics(newLyrics);
      onLyricsChange(newLyrics);

      setSelectedSong(song);
      setInput(`${song.title} - ${song.artist}`);
      setSuggestions([]);
    } catch (error) {
      console.error("Error al obtener las letras:", error);
      setLyrics("Error al obtener las letras.");
      onLyricsChange("Error al obtener las letras.");
    } finally {
      setLoading(false);
    }
  };

  // Clear current selection
  const clearSelection = () => {
    setInput("");
    setLyrics("");
    setSelectedSong(null);
    setSuggestions([]);
    onLyricsChange("");
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Busca la letra..."
          value={input}
          onChange={handleInputChange}
          className="w-full pt-2.5 pb-2 pl-5 pr-7 bg-white border-none rounded-full focus:outline-none font-comfortaa text-md truncate"
          disabled={loading}
        />

        {selectedSong && !loading && (
          <button
            onClick={clearSelection}
            className="absolute right-0 top-0 bg-transparent hover:bg-transparent hover:text-blue border-none text-xl"
          >
            <IonIcon icon={closeOutline} />
          </button>
        )}

        {loading && (
          <div className="absolute right-0 top-0 h-full flex items-center pr-3">
            <IonSpinner className="w-4 h-4" />
          </div>
        )}
      </div>

      {!loading && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-2xl shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue hover:bg-opacity-10 cursor-pointer rounded-2xl"
              onClick={() => fetchLyrics(suggestion)}
            >
              {suggestion.display}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LyricsSearch;
