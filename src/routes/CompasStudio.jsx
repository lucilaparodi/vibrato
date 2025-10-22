// CompasStudio.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import CompasCreator from "../components/CompasCreator";
import LyricsSearch from "../components/LyricsSearch";
import { Button } from "../components/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { addOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import { Preview } from "../components/Preview";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export const CompasStudio = () => {
  const { t, i18n } = useTranslation();
  const [activeModalId, setActiveModalId] = useState(null);
  const [songTitle, setSongTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const navigate = useNavigate();
  // Aquí guardaremos TODOS los bloques
  // Cada bloque tiene un id, nombre (opcional, para "Intro", "Verso", etc.)
  // y compases (un array bidimensional).
  const [compasBlocks, setCompasBlocks] = useState([
    {
      id: 1,
      name: "",
      multiplier: "x1",
      compases: [
        [
          { id: "1-1-1", content: null },
          { id: "1-1-2", content: null },
          { id: "1-1-3", content: null },
          { id: "1-1-4", content: null },
        ],
      ],
    },
  ]);

  function updateBlockMultiplier(blockId, newVal) {
    setCompasBlocks((prev) =>
      prev.map((block) =>
        block.id === blockId ? { ...block, multiplier: newVal } : block
      )
    );
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleOpenModal = (id) => setActiveModalId(id);
  const handleCloseModal = () => setActiveModalId(null);

  // Agregar un bloque con una fila inicial
  const handleAddBlock = () => {
    const newId =
      compasBlocks.length > 0
        ? compasBlocks[compasBlocks.length - 1].id + 1
        : 1;

    const newBlock = {
      id: newId,
      name: "", // El usuario podrá cambiarlo
      compases: [
        [
          { id: `${newId}-1-1`, content: null },
          { id: `${newId}-1-2`, content: null },
          { id: `${newId}-1-3`, content: null },
          { id: `${newId}-1-4`, content: null },
        ],
      ],
    };

    setCompasBlocks([...compasBlocks, newBlock]);
  };

  // Eliminar un bloque completo
  const handleRemoveBlock = (blockId) => {
    setCompasBlocks((prev) => prev.filter((block) => block.id !== blockId));
  };

  // Actualizar el contenido (chord) de un compás en un bloque concreto
  const updateCompasContent = (blockId, compasId, newContent) => {
    setCompasBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.id !== blockId) return block;

        // Mapear cada fila
        const updatedRows = block.compases.map((row) =>
          row.map((compas) =>
            compas.id === compasId ? { ...compas, content: newContent } : compas
          )
        );

        return { ...block, compases: updatedRows };
      })
    );
  };

  // Agregar una fila de 4 compases al bloque con blockId
  const addRowToBlock = (blockId) => {
    setCompasBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.id !== blockId) return block;

        const newRowIndex = block.compases.length + 1;
        const newRow = Array.from({ length: 4 }, (_, idx) => ({
          id: `${blockId}-${newRowIndex}-${idx + 1}`,
          content: null,
        }));

        return { ...block, compases: [...block.compases, newRow] };
      })
    );
  };

  // Borrar una fila específica del bloque
  const deleteRowFromBlock = (blockId, rowIndex) => {
    setCompasBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.id !== blockId) return block;

        const updatedCompases = block.compases.filter(
          (_, index) => index !== rowIndex
        );
        return { ...block, compases: updatedCompases };
      })
    );
  };

  // Actualizar el nombre (ej: "Intro") del bloque
  const updateBlockName = (blockId, newName) => {
    setCompasBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId ? { ...block, name: newName } : block
      )
    );
  };

  // // Descargar en PDF
  // const handleDownload = async () => {
  //   const element = document.querySelector(".preview-container");
  //   if (!element) {
  //     console.error("No se encontró el elemento a capturar.");
  //     return;
  //   }

  //   // Ajustar el ancho al tamaño A4
  //   element.style.width = "595px"; // Aproximadamente el ancho de A4 en px a 96dpi

  //   const canvas = await html2canvas(element, {
  //     scale: 3, // Mayor calidad
  //     useCORS: true,
  //     backgroundColor: "#ffffff",
  //   });

  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("portrait", "mm", "a4");
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   // Obtenemos el alto total en píxeles del canvas
  //   const imgWidth = canvas.width;
  //   const imgHeight = canvas.height;

  //   // Queremos forzar dos páginas: dividimos el canvas en dos mitades.
  //   const halfCanvasHeight = Math.ceil(imgHeight / 2);

  //   for (let page = 0; page < 2; page++) {
  //     // Creamos un canvas temporal para cada página
  //     const pageCanvas = document.createElement("canvas");
  //     const pageContext = pageCanvas.getContext("2d");
  //     pageCanvas.width = imgWidth;
  //     pageCanvas.height = halfCanvasHeight;

  //     // Calculamos la posición vertical de la porción a extraer
  //     const yOffset = page * halfCanvasHeight;

  //     // Extraemos la porción correspondiente del canvas original
  //     pageContext.drawImage(
  //       canvas,
  //       0,
  //       yOffset, // x, y origen en el canvas original
  //       imgWidth,
  //       halfCanvasHeight, // ancho y alto de la porción
  //       0,
  //       0, // x, y destino en el canvas temporal
  //       imgWidth,
  //       halfCanvasHeight // ancho y alto destino
  //     );

  //     const pageImgData = pageCanvas.toDataURL("image/png");

  //     // Agregar la imagen a la página. Calculamos la altura en el PDF manteniendo la proporción.
  //     const renderedPageHeight = (halfCanvasHeight * pdfWidth) / imgWidth;

  //     if (page > 0) {
  //       pdf.addPage();
  //     }
  //     pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, renderedPageHeight);
  //   }

  //   pdf.save(`${songTitle}.pdf`);

  //   // Restauramos el ancho original después de la captura
  //   element.style.width = "";
  // };

  const handlePrintPreview = () => {
    // Guardamos los datos en localStorage
    localStorage.setItem(
      "previewData",
      JSON.stringify({ songTitle, lyrics, compasBlocks })
    );

    // Abrimos una nueva pestaña con la página de impresión (hash routing)
    const base = window.location.origin + window.location.pathname;
    window.open(`${base}#/preview`, "_blank");
  };
  return (
    <>
      <div className="relative gradient-background m-auto">
        <div className="absolute inset-0 grain z-0"></div>
        <div className="w-[95%] m-auto relative z-10 max-w-[1700px]">
          <Header />

          <section className="pt-12 mx-8">
            <h1 className="font-lafleur text-peach text-4xl md:text-7xl ">
              Song studio
            </h1>
            <div className="md:flex justify-between items-center my-5 mt-10 md:mt-5">
              <div className="flex items-center gap-5">
                <Button
                  onClick={() =>
                    changeLanguage(i18n.language === "en" ? "es" : "en")
                  }
                  buttonTitle={
                    i18n.language === "en"
                      ? "Cambiar a cifrado latino"
                      : "Cambiar a cifrado americano"
                  }
                />
              </div>
              <div className="flex items-center gap-9 md:gap-5 my-5 md:my-0">
                {/* <Button onClick={handleDownload} buttonTitle="descargar" /> */}
                <Button
                  buttonTitle="Imprimir/descargar"
                  onClick={handlePrintPreview}
                />
              </div>
            </div>

            <div className="md:flex justify-between items-center gap-10 mt-10">
              <div className="flex flex-col w-full my-5 md:my-0">
                <label className="font-comfortaa text-peach text-md mb-1">
                  Título
                </label>
                <input
                  placeholder="Canción - Artista"
                  className="w-full pt-2.5 pb-2 px-5 bg-white border-none rounded-full focus:outline-none font-comfortaa text-md flex items-center gap-3"
                  value={songTitle}
                  onChange={(e) => setSongTitle(e.target.value)}
                />
              </div>
              <div className="relative flex flex-col w-full z-50">
                <label className="font-comfortaa text-peach text-md mb-1">
                  Letra
                </label>
                <LyricsSearch onLyricsChange={setLyrics} />
              </div>
            </div>

            <div className="compas-content my-10 md:my-0">
              {compasBlocks.map((block) => (
                <CompasCreator
                  key={block.id}
                  blockId={block.id}
                  blockData={block} // Pasamos toda la info del bloque
                  activeModalId={activeModalId}
                  onOpenModal={handleOpenModal}
                  onCloseModal={handleCloseModal}
                  onRemoveBlock={handleRemoveBlock}
                  canRemoveBlock={compasBlocks.length > 1}
                  onUpdateBlockMultiplier={updateBlockMultiplier}
                  onUpdateCompas={updateCompasContent}
                  onAddRow={addRowToBlock}
                  onDeleteRow={deleteRowFromBlock}
                  onUpdateBlockName={updateBlockName}
                />
              ))}
            </div>
            <div className="pb-10 sm:pb-0">
              <Button
                buttonTitle="Agregar bloque"
                icon={addOutline}
                onClick={handleAddBlock}
              />
            </div>
          </section>
          <div className="hidden sm:block py-20 mx-8">
            <h2 className="font-lafleur text-4xl text-peach my-6">Preview</h2>
            <div className="preview-container">
              <Preview
                songTitle={songTitle}
                lyrics={lyrics}
                compasBlocks={compasBlocks} // Pasamos toda la info de los bloques
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
