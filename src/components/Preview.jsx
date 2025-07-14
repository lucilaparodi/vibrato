import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LyricsSection from "./LyricsSection";
import ChordsSection from "./ChordsSection";
import VibratoLogoBlue from "./VibratoLogoBlue";
import { renderChord } from "./renderChord";

// Para saber si un compás está vacío
function isEmptyCompas(compas) {
  if (!compas || !compas.content) return true;
  const c = compas.content;
  if (Array.isArray(c)) {
    return c.every((ch) => !ch || !ch.trim());
  }
  return !c.trim();
}

export const Preview = ({
  songTitle,
  compasBlocks,
  lyrics,
  stacked = false,
}) => {
  const { t } = useTranslation();
  const [needsTwoViews, setNeedsTwoViews] = useState(false);
  const fullRef = useRef(null);

  // Mide la altura del contenedor "único"
  useEffect(() => {
    if (fullRef.current) {
      const height = fullRef.current.scrollHeight;
      setNeedsTwoViews(height > 842);
    }
  }, [lyrics, compasBlocks]);

  // Vista oculta para medir la altura (si se usa esa estrategia)
  function HiddenSingleView() {
    return (
      <div
        ref={fullRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          visibility: "hidden",
        }}
      >
        <div className="bg-white w-[595px] px-10 py-10 font-comfortaa text-xs">
          <div className="flex justify-center">
            <VibratoLogoBlue />
          </div>
          <LyricsSection title={songTitle} lyrics={lyrics} />
          <ChordsSection
            compasBlocks={compasBlocks}
            isEmptyCompas={isEmptyCompas}
            renderChord={(chord) => renderChord(chord, t)}
          />
        </div>
      </div>
    );
  }

  // Render de la vista única (single view)
  function renderSingleView() {
    return (
      <div
        id="preview"
        className="bg-white w-full md:w-[595px] rounded-lg px-10 py-10 font-comfortaa text-xs"
      >
        <div className="flex justify-center">
          <VibratoLogoBlue />
        </div>
        <LyricsSection title={songTitle} lyrics={lyrics} />
        <ChordsSection
          compasBlocks={compasBlocks}
          isEmptyCompas={isEmptyCompas}
          renderChord={(chord) => renderChord(chord, t)}
        />
      </div>
    );
  }

  // Render de la vista doble: usa flex-col si se quiere apilado verticalmente
  function renderDoubleView() {
    return (
      <div
        id="preview"
        className={`flex ${
          stacked ? "flex-col" : "flex-col 1xl:flex-row"
        } gap-4`}
      >
        {/* Vista de la letra */}
        <div
          id="preview-lyrics"
          className="bg-white w-full md:w-[595px] h-[842px] rounded-lg px-10 py-10 font-comfortaa text-xs"
        >
          <div className="flex justify-center">
            <VibratoLogoBlue />
          </div>
          <LyricsSection title={songTitle} lyrics={lyrics} />
        </div>

        {/* Vista de los acordes */}
        <div
          id="preview-chords"
          className="bg-white w-full md:w-[595px] h-[842px] rounded-lg px-10 py-10 font-comfortaa text-xs"
        >
          <div className="flex justify-center">
            <VibratoLogoBlue />
          </div>
          <h3 className="text-black text-sm font-bold">
            {songTitle || "Canción - Artista"}
          </h3>
          <ChordsSection
            compasBlocks={compasBlocks}
            isEmptyCompas={isEmptyCompas}
            renderChord={(chord) => renderChord(chord, t)}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Componente oculto para medir */}
      <HiddenSingleView />

      {/* Render final: si necesita dos vistas se renderiza la doble, de lo contrario la única */}
      {needsTwoViews ? renderDoubleView() : renderSingleView()}
    </>
  );
};
