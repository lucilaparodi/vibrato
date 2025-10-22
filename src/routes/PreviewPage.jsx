import { useEffect, useState } from "react";
import { Preview } from "../components/Preview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function PreviewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Recuperamos los datos desde localStorage
    const storedData = localStorage.getItem("previewData");
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (err) {
        console.error("Error al parsear previewData:", err);
      }
    }
  }, []);

  // Helper: detectar iOS/iPadOS (incluye iPad con UA de Mac)
  const isIOS = () => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const iOSMobile = /iPad|iPhone|iPod/.test(ua);
    const iPadModern =
      navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    return iOSMobile || iPadModern;
  };

  // Generar PDF a partir del contenido del preview y abrir/descargar
  const generateAndOpenPdf = async (title) => {
    const container = document.querySelector(".preview-page-container");
    if (!container) return;

    // Guardamos estilos para restaurar luego
    const originalWidth = container.style.width;
    container.style.width = "595px"; // Ancho A4 en px aprox a 96dpi

    try {
      const canvas = await html2canvas(container, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdf = new jsPDF("portrait", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      // Partimos el canvas verticalmente en 842px aprox por página (mitad si son 2 páginas apiladas como esperamos)
      const pageHeightPx = Math.ceil(imgHeight / 2);

      for (let page = 0; page < 2; page++) {
        const pageCanvas = document.createElement("canvas");
        const pageContext = pageCanvas.getContext("2d");
        pageCanvas.width = imgWidth;
        pageCanvas.height = pageHeightPx;

        const yOffset = page * pageHeightPx;
        pageContext.drawImage(
          canvas,
          0,
          yOffset,
          imgWidth,
          pageHeightPx,
          0,
          0,
          imgWidth,
          pageHeightPx
        );

        const pageImgData = pageCanvas.toDataURL("image/png");
        const renderedPageHeight = (pageHeightPx * pdfWidth) / imgWidth;
        if (page > 0) pdf.addPage();
        pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, renderedPageHeight);
      }

      // En iOS es más fiable abrir el blob URL que forzar descarga
      const pdfBlobUrl = pdf.output("bloburl");
      window.location.href = pdfBlobUrl;
    } catch (e) {
      console.error("Error generando PDF:", e);
    } finally {
      container.style.width = originalWidth || "";
    }
  };

  // Imprime automáticamente (o exporta PDF en iOS) cuando todo esté listo
  useEffect(() => {
    if (!data) return;

    let cancelled = false;

    const waitForAssetsAndPrint = async () => {
      try {
        // Esperar a que las fuentes estén listas (si el navegador lo soporta)
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }

        // Esperar a que todas las imágenes terminen de cargar
        const images = Array.from(document.images);
        const pending = images
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.onload = img.onerror = resolve;
              })
          );
        if (pending.length > 0) {
          await Promise.all(pending);
        }

        if (!cancelled) {
          // Pequeño delay para asegurar layout final
          setTimeout(() => {
            try {
              if (isIOS()) {
                generateAndOpenPdf(data?.songTitle || "vibrato");
              } else {
                window.print();
              }
            } catch (e) {
              console.error("Fallo al imprimir/exportar:", e);
            }
          }, 100);
        }
      } catch (e) {
        // Como fallback, intentar imprimir igualmente
        if (!cancelled) {
          setTimeout(() => {
            try {
              if (isIOS()) {
                generateAndOpenPdf(data?.songTitle || "vibrato");
              } else {
                window.print();
              }
            } catch (err) {
              console.error("Fallo al imprimir/exportar (fallback):", err);
            }
          }, 100);
        }
      }
    };

    waitForAssetsAndPrint();
    return () => {
      cancelled = true;
    };
  }, [data]);

  if (!data) return <p>Cargando...</p>;

  return (
    <div className="preview-page-container">
      <Preview
        stacked={true} // <--- Aquí indicamos que se usen vistas apiladas verticalmente
        songTitle={data.songTitle}
        lyrics={data.lyrics}
        compasBlocks={data.compasBlocks}
      />
    </div>
  );
}
