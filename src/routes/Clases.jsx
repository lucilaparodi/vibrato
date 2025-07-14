import Header from "../components/Header";
import Footer from "../components/Footer";
import TiposDeClases from "../components/TiposDeClases";
import GrupalesIndividuales from "../components/GrupalesIndividuales";
import Flexibilidad from "../components/Flexibilidad";

export function Clases() {
  return (
    <>
      <div className="relative m-auto gradient-background">
        <div className="w-[95%] max-w-[1700px] m-auto relative z-10">
          <Header />
          <TiposDeClases />
          <GrupalesIndividuales />
          <Flexibilidad />
          <Footer />
        </div>
        <div className="absolute inset-0 grain z-0"></div>
      </div>
    </>
  );
}
