import Header from "../components/Header";
import Footer from "../components/Footer";

export function Proximamente() {
  return (
    <div className="relative h-[101vh] gradient-background2 overflow-x-hidden">
      {/* Capa de fondo (efecto grano) */}
      <div className="absolute inset-0 grain z-0"></div>

      {/* Contenedor principal */}
      <div className="flex flex-col h-full w-[95%] max-w-[1700px] mx-auto relative z-10">
        <Header />

        {/* Contenedor central que ocupa el espacio restante */}
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-peach font-lafleur text-4xl sm:text-7xl">
            Próximamente...
          </h1>
        </main>

        <Footer />
      </div>
    </div>
  );
}
