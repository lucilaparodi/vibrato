import { useEffect, useState } from "react";
import { Preview } from "../components/Preview";

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

    // Configurar estilos globales para impresión
    const style = document.createElement("style");
    style.innerHTML = `
      @page {
        margin: 0;
        padding: 0;
        size: auto;
      }
      @media print {
        body, html {
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .preview-page-container {
          margin: 0;
          padding: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Imprime automáticamente cuando los datos y recursos estén listos
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
              window.print();
            } catch (e) {
              console.error("Fallo al invocar print():", e);
            }
          }, 100);
        }
      } catch (e) {
        // Como fallback, intentar imprimir igualmente
        if (!cancelled) {
          setTimeout(() => {
            try {
              window.print();
            } catch (err) {
              console.error("Fallo al invocar print() (fallback):", err);
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
