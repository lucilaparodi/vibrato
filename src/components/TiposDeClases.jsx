export const TiposDeClases = () => {
  const clases = [
    {
      title: "Guitarra",
      img: "assets/guitarra.png",
      description:
        "El instrumento más popular de todos, probablemente tenés una en tu casa o cerca. Sacate las ganas de aprender y llévala al próximo fogón",
    },
    {
      title: "Piano",
      img: "assets/teclado.png",
      description:
        "El instrumento más visual, sus teclas y disposición hacen que aprendas sobre teoría musical al mismo tiempo que aprendes a tocar tus canciones favoritas",
    },
    {
      title: "Bajo",
      img: "assets/bajo.png",
      description:
        "A pesar de que mucha gente no puede reconocer el bajo en una canción, es de los instrumentos más importantes. Una vez que aprendas a escucharlo no vas a querer dejar de tocar",
    },
    {
      title: "Batería",
      img: "assets/bateria-clases.png",
      description:
        "Si bien parece intimidante y compleja, es uno de los instrumentos más divertidos e intuitivos para aprender.",
    },
    {
      title: "Producción musical",
      img: "assets/interfaz.png",
      description:
        "Si alguna vez quisiste grabar en casa, seguramente te perdiste entre tantos videos de youtube sin un camino claro. Aprender en persona con un profesor es la mejor forma de progresar.",
    },
  ];

  return (
    <>
      {/* Título común */}
      <h1 className="text-center font-lafleur text-peach text-4xl md:text-7xl  mb-12 my-20 mx-8">
        Clases de música
      </h1>

      <div className="mx-8">
        {/* ========= Desktop (lg en adelante) ========= */}
        <div className="hidden lg:block">
          <div className="flex flex-col lg:flex-row gap-8 py-8">
            {/* Primer bloque: items con índices 0, 1 y 2 */}
            <div className="flex-1 flex flex-col gap-20 text-peach font-comfortaa">
              {clases
                .filter((_, index) => [0, 2, 1].includes(index))
                .map((item, idx) => (
                  <div key={idx} className="flex items-center gap-12">
                    <div className="relative w-[16vw] h-[16vw] flex items-center justify-center">
                      <div className="absolute inset-50 w-[12vw] h-[12vw] gradient-menu rounded-full opacity-20 border-2 border-peach"></div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="relative z-10 w-[16vw] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="w-[20vw]">
                      <h2 className="text-xl py-2">{item.title}</h2>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Segundo bloque: items con índices 3 y 4 */}
            <div className="flex-1 flex flex-col gap-20 text-peach font-comfortaa mt-52">
              {clases
                .filter((_, index) => [3, 4].includes(index))
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-12 flex-row-reverse"
                  >
                    <div className="relative w-[16vw] h-[16vw] flex items-center justify-center">
                      <div className="absolute inset-50 w-[12vw] h-[12vw] gradient-menu rounded-full opacity-20 border-2 border-peach"></div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="relative z-10 w-[62vw] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="w-[20vw]">
                      <h2 className="text-xl text-right py-2">{item.title}</h2>
                      <p className="text-sm text-right">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* ========= Mobile (pantallas menores a lg) ========= */}
        <div className="block lg:hidden text-peach font-comfortaa">
          {/* Contenedor general centrado */}
          <div className="flex flex-col items-center gap-20 py-8">
            {clases.map((item, index) => (
              // Cada item se muestra en un contenedor de ancho máximo
              <div key={index} className="w-full max-w-lg">
                {/* Alternamos el orden usando flex-col */}
                <div className="flex items-center gap-4 flex-col">
                  {/* Contenedor de la imagen con fondo circular */}
                  <div className="relative w-56 h-56 flex items-center justify-center">
                    <div className="absolute inset-50 w-44 h-44 gradient-menu rounded-full opacity-20 border-2 border-peach"></div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="relative z-10 w-56 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  {/* Datos del item */}
                  <div className="flex-1">
                    <h2
                      className={`text-xl py-2 ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`text-sm ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TiposDeClases;
