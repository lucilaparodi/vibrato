import { useEffect, useState } from "react";
import { Preview } from "../components/Preview";
import LogoVibratoBlue from "../components/VibratoLogoBlue";

export function PreviewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Recuperamos los datos desde localStorage
    const storedData = localStorage.getItem("previewData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }

    // Opcional: Imprimir automáticamente
    window.print();
  }, []);

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
