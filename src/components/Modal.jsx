import { useState, useEffect } from "react";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

function Modal({ onClose, onSave, chord, onChordChange = () => {} }) {
  const { t } = useTranslation();

  // Notas base
  const notes = ["do", "re", "mi", "fa", "sol", "la", "si"];

  // Modificadores para la parte principal (sin slash)
  const modifiers = [
    "#",
    "b",
    "7",
    "m",
    "sus",
    "add",
    "maj",
    "/",
    "2",
    "4",
    "5",
    "6",
    "9",
    "11",
    "13",
  ];

  // Modificadores permitidos en la parte de bajos (slash)
  const slashModifiersList = ["#", "b"];

  // Parseamos el acorde entrante para estados iniciales
  let initialNote = "";
  let initialModifiers = [];
  let initialSlashNote = "";
  let initialSlashModifiers = [];

  if (chord) {
    const parts = chord.split("/");
    if (parts.length === 2) {
      // Tenemos slash chord
      const left = parts[0].trim();
      const right = parts[1].trim();

      // Parse parte izquierda
      const leftParts = left.split(/\s+/).filter(Boolean);
      if (leftParts.length) {
        initialNote = leftParts[0];
        initialModifiers = leftParts.slice(1);
      }

      // Parse parte de bajos derecha
      const rightParts = right.split(/\s+/).filter(Boolean);
      if (rightParts.length) {
        initialSlashNote = rightParts[0];
        initialSlashModifiers = rightParts.slice(1);
      }

      // Marcamos que hay slash activo
      initialModifiers.push("/");
    } else {
      // Sin slash
      const all = chord.split(/\s+/).filter(Boolean);
      if (all.length) {
        initialNote = all[0];
        initialModifiers = all.slice(1);
      }
    }
  }

  // Estados
  const [selectedNote, setSelectedNote] = useState(initialNote);
  const [selectedModifiers, setSelectedModifiers] = useState(initialModifiers);
  const [slashNote, setSlashNote] = useState(initialSlashNote);
  const [slashModifiers, setSlashModifiers] = useState(initialSlashModifiers);

  // Efecto para actualizar previsualización
  useEffect(() => {
    const leftMods = selectedModifiers.filter((m) => m !== "/");
    let preview = [selectedNote, ...leftMods].join(" ").trim();

    if (selectedModifiers.includes("/") && slashNote) {
      const bassMods = slashModifiers.join(" ");
      preview += ` / ${slashNote}${bassMods ? ` ${bassMods}` : ""}`;
    }

    if (preview !== chord) {
      onChordChange(preview);
    }
  }, [
    selectedNote,
    selectedModifiers,
    slashNote,
    slashModifiers,
    chord,
    onChordChange,
  ]);

  // Limpiar bajos si desactivamos slash
  useEffect(() => {
    if (!selectedModifiers.includes("/")) {
      setSlashNote("");
      setSlashModifiers([]);
    }
  }, [selectedModifiers]);

  // Función para construir el acorde final
  const buildFinalChord = () => {
    const leftMods = selectedModifiers.filter((m) => m !== "/");
    let finalChord = [selectedNote, ...leftMods].join(" ").trim();

    if (selectedModifiers.includes("/") && slashNote) {
      finalChord += ` / ${slashNote}${
        slashModifiers.length ? ` ${slashModifiers.join(" ")}` : ""
      }`;
    }

    return finalChord;
  };

  // Guardar acorde definitivo
  const handleSave = () => {
    const finalChord = buildFinalChord();
    onSave(finalChord);
    onClose();
  };

  // Cerrar y guardar automáticamente
  const handleCloseAndSave = () => {
    const finalChord = buildFinalChord();
    onSave(finalChord);
    onClose();
  };

  // Toggle modifiers raíz
  const toggleModifier = (mod) => {
    setSelectedModifiers((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  // Toggle modifiers bajos
  const toggleSlashModifier = (mod) => {
    setSlashModifiers((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  // Esc to close and save
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        handleCloseAndSave();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedNote, selectedModifiers, slashNote, slashModifiers]);

  return (
    <div className="z-30">
      <div className="fixed inset-0 bg-transparent z-30" onClick={handleCloseAndSave} />
      <div
        className="bg-white p-4 w-64 rounded-2xl shadow-lg relative pointer-events-auto mt-4 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Selección nota raíz */}
        <div className="flex justify-center gap-0.5 mb-2">
          {notes.map((n) => (
            <button
              key={n}
              className={`py-0 px-1 rounded ${
                selectedNote === n
                  ? "border-2 border-blue bg-white text-blue"
                  : "bg-blue border-2 border-blue text-white hover:text-blue hover:bg-white"
              }`}
              onClick={() => setSelectedNote(n)}
            >
              <span className="text-xs">{t(n)}</span>
            </button>
          ))}
        </div>

        {/* Modifiers raíz incluyendo "/" */}
        <div className="flex justify-center gap-1 flex-wrap">
          {modifiers.map((mod) => (
            <button
              key={mod}
              className={`text-xs p-1 rounded border ${
                selectedModifiers.includes(mod)
                  ? "bg-transparent text-red border-red hover:text-red"
                  : "bg-transparent text-black border-gray-300 hover:text-red"
              }`}
              onClick={() => toggleModifier(mod)}
            >
              {mod}
            </button>
          ))}
        </div>

        {/* Selección bajos */}
        {selectedModifiers.includes("/") && (
          <>
            <div className="flex justify-center gap-1 mt-3 flex-wrap">
              {notes.map((n) => (
                <button
                  key={n}
                  className={`py-0 px-1 rounded ${
                    slashNote === n
                      ? "border-2 border-blue bg-white text-blue"
                      : "bg-blue border-2 border-blue text-white hover:text-blue hover:bg-white"
                  }`}
                  onClick={() => setSlashNote(n)}
                >
                  <span className="text-xs">{t(n)}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-1 mt-2">
              {slashModifiersList.map((mod) => (
                <button
                  key={mod}
                  className={`text-xs p-1 rounded border ${
                    slashModifiers.includes(mod)
                      ? "bg-transparent text-red border-red hover:text-red"
                      : "bg-transparent text-black border-gray-300 hover:text-red"
                  }`}
                  onClick={() => toggleSlashModifier(mod)}
                >
                  {mod}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Botón guardar */}
        <div className="flex items-center justify-center mt-3">
          <Button onClick={handleSave} buttonTitle="guardar" blue small />
        </div>
      </div>
    </div>
  );
}

export default Modal;
