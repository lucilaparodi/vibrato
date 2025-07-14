import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addOutline, trashOutline } from "ionicons/icons";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

export default function CompasButton({
  id,
  content,
  isActive,
  onOpenModal,
  onCloseModal,
  onUpdate,
}) {
  const { t } = useTranslation();

  // Si content es array, tenemos múltiples sub-acordes. Si es string, es un solo acorde.
  const chords = Array.isArray(content) ? content : content ? [content] : [];

  // Índice del sub-acorde que se está editando
  const [currentIndex, setCurrentIndex] = useState(null);

  // Acorde temporal para previsualizar (mientras se edita en el modal)
  const [tempChord, setTempChord] = useState("");

  // Al abrir el modal, copiamos el acorde real al tempChord
  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setTempChord(chords[idx] || "");
    onOpenModal(id);
  };

  // Al guardar, inyectamos tempChord en la posición adecuada de chords
  const handleSave = (finalChord) => {
    const updated = [...chords];
    if (currentIndex != null) {
      updated[currentIndex] = finalChord;
    }
    onUpdate(
      id,
      updated.length === 0 ? null : updated.length === 1 ? updated[0] : updated
    );
    onCloseModal();
  };

  // Botón de borrar contenido (todo el compás)
  const handleClear = () => {
    onUpdate(id, null);
  };

  // Botón de “dividir” (añade un subacorde si hay menos de 4)
  const handleDivide = () => {
    if (chords.length >= 4) return;
    if (chords.length === 0) {
      onUpdate(id, [null, null]);
    } else {
      onUpdate(id, [...chords, null]);
    }
  };

  // Eliminar un subacorde individual
  const handleDelete = (idx) => {
    const updated = chords.filter((_, i) => i !== idx);
    if (updated.length === 0) {
      onUpdate(id, null);
    } else if (updated.length === 1) {
      onUpdate(id, updated[0]);
    } else {
      onUpdate(id, updated);
    }
  };

  // Renderizar un subacorde (ch) con traducción de nota principal y (opcional) nota del slash
  const renderChordUI = (ch, idx) => {
    const displayChord = isActive && idx === currentIndex ? tempChord : ch;

    // Si no hay acorde, mostramos ícono de "añadir"
    if (!displayChord) {
      return <IonIcon className="text-3xl font-bold" icon={addOutline} />;
    }

    // 1) Separamos si hay barra
    const slashIndex = displayChord.indexOf("/");
    let mainPart = displayChord; // Por defecto, todo el acorde es "main"
    let slashPart = "";

    if (slashIndex >= 0) {
      mainPart = displayChord.slice(0, slashIndex).trim(); // Ej: "do #"
      slashPart = displayChord.slice(slashIndex + 1).trim(); // Ej: "re"
    }

    // 2) Parseamos la parte principal
    const mainParts = mainPart.split(/\s+/).filter(Boolean);
    const mainNote = mainParts[0] || "";
    const mainMods = mainParts.slice(1);

    // 3) Parseamos la parte del slash (si existe)
    let slashNote = "";
    let slashMods = [];
    if (slashPart) {
      const sp = slashPart.split(/\s+/).filter(Boolean);
      slashNote = sp[0] || "";
      slashMods = sp.slice(1);
    }

    // 4) Render final, traduciendo las notas y mostrando los modifiers
    return (
      <span className="flex items-end gap-0 justify-center">
        {/* Nota principal traducida */}
        <span className="text-sm xl:text-lg leading-none">{t(mainNote)}</span>
        {/* Modificadores de la parte principal */}
        {mainMods.length > 0 && (
          <span className="flex gap-0 text-2xs xl:text-xs xl:pb-1">
            {mainMods.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </span>
        )}

        {/* Slash chord (si hay slashNote) */}
        {slashNote && (
          <>
            <span className="text-sm xl:text-lg leading-none">/</span>
            <span className="text-sm xl:text-lg leading-none">
              {t(slashNote)}
            </span>
            {slashMods.length > 0 && (
              <span className="flex gap-0 text-2xs  xl:text-xs">
                {slashMods.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </span>
            )}
          </>
        )}
      </span>
    );
  };

  return (
    <div className="relative border-2 rounded-full w-48 md:w-64 lg:w-48 xl:w-64 h-16 flex flex-col items-center font-comfortaa mt-10 lg:mt-0">
      {/* Botones de borrar y dividir arriba */}
      <div className="absolute top-[-0.5rem] left-0 transform -translate-y-full flex px-2 border-2 border-white rounded-full items-center">
        <button
          className="text-white bg-transparent px-2 py-1 text-xs border-none rounded hover:text-peach"
          onClick={handleClear}
        >
          <IonIcon className="pt-1" icon={trashOutline} />
        </button>
        <button
          className="bg-transparent text-white px-2 py-1 text-xs rounded hover:text-peach disabled:opacity-50 disabled:bg-transparent border-none"
          onClick={handleDivide}
          disabled={chords.length >= 4}
        >
          <IonIcon className="pt-1" icon={addOutline} />
        </button>
      </div>

      {/* Si hay más de 1 subacorde, renderizamos varios “mini-botones” */}
      {chords.length > 1 ? (
        <div className="flex justify-center w-full h-full gap-5">
          {chords.map((ch, idx) => (
            <div key={idx} className="relative flex items-center">
              <button
                className="absolute bg-transparent right-[-13px] top-1 text-white px-1 hover:text-peach border-none"
                onClick={() => handleDelete(idx)}
              >
                <IonIcon className="text-xs" icon={trashOutline} />
              </button>
              <button
                className="p-1 text-sm bg-transparent text-white hover:text-peach border-none"
                onClick={() => handleOpen(idx)}
              >
                {renderChordUI(ch, idx)}
              </button>
            </div>
          ))}
        </div>
      ) : (
        // Caso de 0 o 1 acorde
        <button
          className="text-white bg-transparent border-0 hover:text-peach flex-1"
          onClick={() => handleOpen(0)}
        >
          {renderChordUI(chords[0], 0)}
        </button>
      )}

      {/* Modal: recibe chord={tempChord} y onChordChange={setTempChord} para previsualizar */}
      {isActive && (
        <Modal
          onClose={onCloseModal}
          onSave={handleSave}
          chord={tempChord}
          onChordChange={setTempChord}
        />
      )}
    </div>
  );
}
