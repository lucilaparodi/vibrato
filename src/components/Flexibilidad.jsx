export const Flexibilidad = () => {
  return (
    <div className="w-auto mx-4 mb-16 md:mx-8 md:mb-24">
      {/* Contenedor de la imagen con overflow-hidden para que no se desborde */}
      <div className="relative overflow-hidden rounded-4xl">
        <img
          src="/assets/clases-foto.png"
          alt="Clases de música"
          className="w-full h-auto object-cover opacity-80 max-h-[50vh] md:max-h-screen"
        />
        {/* Borde superpuesto */}
        <div className="pointer-events-none absolute top-4 left-4 right-4 bottom-4 border-2 border-peach rounded-3xl" />
        {/* Texto sobre la imagen para pantallas md en adelante */}
        <div className="hidden md:mb-[-50vh] md:flex absolute inset-0 items-center justify-center text-center px-8">
          <div>
            <h2 className="text-peach font-lafleur text-4xl mb-4">
              Flexibilidad en las clases
            </h2>
            <p className="font-comfortaa text-peach text-base max-w-xl">
              La musica es un lenguaje que se desarrolla en varias áreas. A
              medida que vamos aprendiendo un instrumento es normal que tengamos
              curiosidad por saber como funcionan los otros y querer expandir
              nuestras habilidades a otros instrumentos. Animamos a los alumnos
              a experimentar con otros instrumentos y tener asi una visión mas
              completa de cómo funciona la musica.
            </p>
          </div>
        </div>
      </div>
      {/* Texto debajo de la imagen para mobile */}
      <div className="block md:hidden text-center px-4 mt-4">
        <h2 className="text-peach font-lafleur text-2xl mb-4">
          Flexibilidad en las clases
        </h2>
        <p className="font-comfortaa text-peach text-sm max-w-xl mx-auto">
          La musica es un lenguaje que se desarrolla en varias áreas. A medida
          que vamos aprendiendo un instrumento es normal que tengamos curiosidad
          por saber como funcionan los otros y querer expandir nuestras
          habilidades a otros instrumentos. Animamos a los alumnos a
          experimentar con otros instrumentos y tener asi una visión mas
          completa de cómo funciona la musica.
        </p>
      </div>
    </div>
  );
};

export default Flexibilidad;
