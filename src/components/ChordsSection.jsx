import React from "react";

export default function ChordsSection({
  compasBlocks,
  isEmptyCompas,
  renderChord,
}) {
  if (!compasBlocks || compasBlocks.length === 0) return null;

  return (
    <div className="mt-6 text-sm text-black font-comfortaa">
      {compasBlocks.map((block) => {
        // Chequeo: bloque vacío
        const isBlockEmpty = block.compases.every((row) =>
          row.every((compas) => !compas || isEmptyCompas(compas))
        );

        return (
          <div key={block.id} className="mb-6">
            <h4 className="font-bold">
              {block.name || ""}
              {block.multiplier && block.multiplier !== "x1"
                ? ` ${block.multiplier}`
                : ""}
            </h4>

            {block.compases.map((row, rowIndex) => {
              // Chequeamos si la fila tiene contenido
              const rowHasContent = row.some((c) => c && !isEmptyCompas(c));
              if (!rowHasContent) return null;

              // Para dibujar borders
              let lastNonEmpty = -1;
              row.forEach((c, i) => {
                if (c && !isEmptyCompas(c)) lastNonEmpty = i;
              });

              return (
                <div key={rowIndex} className="grid grid-cols-4 gap-0 my-3">
                  {[0, 1, 2, 3].map((colIndex) => {
                    const compas = row[colIndex];
                    const empty = !compas || isEmptyCompas(compas);
                    const prev = colIndex > 0 ? row[colIndex - 1] : null;
                    const prevEmpty = !prev || isEmptyCompas(prev);
                    const prevWasLast = colIndex - 1 === lastNonEmpty;

                    let cellClasses = "";
                    if (colIndex === 0) {
                      if (!empty) {
                        cellClasses += " border-l border-black";
                      }
                    } else {
                      if ((!empty || !prevEmpty) && !prevWasLast) {
                        cellClasses += " border-l border-black";
                      }
                    }
                    if (colIndex === lastNonEmpty) {
                      cellClasses += " border-r border-black";
                    }

                    return (
                      <div
                        key={colIndex}
                        className={
                          "p-2 flex items-center justify-center" + cellClasses
                        }
                      >
                        {!empty &&
                          (Array.isArray(compas.content) ? (
                            // Si es un array de acordes, renderizamos cada uno con un pequeño espacio entre ellos
                            <div className="flex space-x-3">
                              {compas.content.map((chord, i) => (
                                <div key={i}>{renderChord(chord)}</div>
                              ))}
                            </div>
                          ) : (
                            // Si es un solo acorde, se renderiza directamente
                            renderChord(compas.content)
                          ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
