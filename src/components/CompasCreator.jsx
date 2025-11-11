// CompasCreator.jsx

import React from "react";
import CompasButton from "./CompasButton";
import { IonIcon } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { Button } from "./Button";
import { addOutline } from "ionicons/icons";
import NumberInput from "./NumberInput";

const CompasCreator = ({
  blockId,
  blockData,
  activeModalId,
  onOpenModal,
  onCloseModal,
  onRemoveBlock,
  canRemoveBlock,
  onUpdateCompas, // callback para actualizar el content de un compás
  onAddRow, // callback para agregar una fila
  onDeleteRow, // callback para borrar una fila
  onUpdateBlockName, // callback para actualizar el name del bloque (ej. "Intro", "Verso", etc.),
  onUpdateBlockMultiplier,
}) => {
  const { compases, name } = blockData; // compases es un array de arrays con { id, content }

  function updateCompasContent(blockId, compasId, newContent) {
    setCompasBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.id !== blockId) return block;
        const updatedRows = block.compases.map((row) =>
          row.map((compas) => {
            if (compas.id === compasId) {
              return { ...compas, content: newContent }; // <-- ahora newContent puede ser array/string/null
            }
            return compas;
          })
        );
        return { ...block, compases: updatedRows };
      })
    );
  }

  const handleMultiplierChange = (newVal) => {
    // Llamas una callback que actualice blockData.multiplier en el padre
    onUpdateBlockMultiplier(blockId, newVal);
  };

  // Handler para cuando cambia el nombre de bloque (input "Intro", "Verso", etc.)
  const handleNameChange = (e) => {
    onUpdateBlockName(blockId, e.target.value);
  };

  // Agregar una fila (4 compases)
  const handleAddRowClick = () => {
    onAddRow(blockId);
  };

  // Borrar fila
  const handleDeleteRowClick = (rowIndex) => {
    onDeleteRow(blockId, rowIndex);
  };

  return (
    <div className="p-6 bg-white bg-opacity-20 rounded-2xl border-2 border-white my-5">
      {/* Encabezado del bloque */}
      <div className="flex items-center justify-between">
        <div className="md:flex items-center gap-4">
          {/* Título / sección del bloque */}
          <input
            placeholder="Intro"
            className="md:w-64 pt-2.5 pb-2 px-5 bg-white border-none rounded-full focus:outline-none font-comfortaa text-md"
            value={name}
            onChange={handleNameChange}
          />

          {/* Input numérico para repeticiones */}
          <div className="flex justify-between gap-4 my-5 md:my-0">
            <NumberInput
              value={blockData.multiplier}
              onChange={handleMultiplierChange}
              minValue={1}
            />

            {/* Botón para añadir fila (4 compases nuevos por fila) */}
            <Button
              buttonTitle="4"
              onClick={handleAddRowClick}
              icon={addOutline}
            />
          </div>
        </div>

        {canRemoveBlock && (
          <button
            className="bg-transparent border-none hover:bg-transparent hover:brightness-115 cursor-pointer"
            onClick={() => onRemoveBlock(blockId)}
          >
            <IonIcon icon={trashOutline} className="text-peach text-2xl" />
          </button>
        )}
      </div>

      {/* Aquí se renderizan las filas de compases */}
      <div className="mt-8 md:mt-16 flex flex-col gap-6 relative">
        {compases.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="lg:flex items-start lg:items-center gap-4 relative"
          >
            {/* Contenedor de CompasButtons responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 md:py-5 lg:flex lg:gap-4">
              {row.map((compas) => (
                <CompasButton
                  key={compas.id}
                  id={compas.id}
                  content={compas.content}
                  isActive={activeModalId === compas.id}
                  onOpenModal={onOpenModal}
                  onCloseModal={onCloseModal}
                  onUpdate={(compasId, newContent) =>
                    onUpdateCompas(blockId, compasId, newContent)
                  }
                />
              ))}
            </div>

            {/* Botón eliminar fila (posición responsive) */}
            <button
              className="text-white bg-transparent px-2 py-1 text-lg border-0 rounded hover:bg-transparent hover:brightness-115 hover:text-peach lg:self-center self-end -mt-3  lg:mt-0"
              onClick={() => handleDeleteRowClick(rowIndex)}
            >
              <IonIcon icon={trashOutline} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompasCreator;
