import Anemona from "../svgs/Anemona";
import Stars from "../svgs/Stars";

export const GrupalesIndividuales = () => {
  return (
    <>
      {/* ================== Desktop (md en adelante) ================== */}
      <div className="group hidden md:flex justify-between items-center gap-16 my-32 mx-4">
        {/* Decoración izquierda */}
        <div className="hidden md:flex justify-start">
          <div className="flex flex-col items-center">
            <Stars />
            <div
              className="w-0.5 bg-peach my-[-13px]"
              style={{ height: "300px" }}
            />
          </div>
        </div>

        {/* Contenido central */}
        <div className="flex justify-center items-center gap-24">
          <div className="text-center w-4/5">
            <h2 className="text-4xl text-peach font-lafleur">
              Clases grupales
            </h2>
            <p className="text-peach font-comfortaa">
              Si querés tener la atención personalizada de un profesor para
              perfeccionar tu habilidad en un instrumento, contamos con clases
              individuales especializadas para cada alumno. Si estás empezando
              de 0 esta es la mejor opción
            </p>
          </div>
          {/* Anemona con animación al hacer hover en el contenedor */}
          <div
            className="w-1/2 group-hover:animate-spin transition-transform duration-500"
            style={{ animationDuration: "3s" }}
          >
            <Anemona />
          </div>
          <div className="text-center w-4/5">
            <h2 className="text-4xl text-peach font-lafleur">
              Clases individuales
            </h2>
            <p className="text-peach font-comfortaa">
              Si contás con compañeros con los que quieran aprender juntos, el
              aprendizaje musical no solo lo permite sino que se beneficia de
              poder escuchar y tocar con alguien más o tienen por qué tocar el
              mismo instrumento. ideales para alumnos con alguna noción básica
              de un instrumento.
            </p>
          </div>
        </div>

        {/* Decoración derecha */}
        <div className="hidden md:flex justify-start">
          <div className="flex flex-col items-center">
            <div
              className="w-0.5 bg-peach my-[-13px]"
              style={{ height: "300px" }}
            />
            <Stars />
          </div>
        </div>
      </div>

      {/* ================== Mobile (por debajo de md) ================== */}
      <div className="group block md:hidden my-16 mx-4">
        <div className="flex flex-col items-center gap-8">
          {/* Anemona superior a la mitad de tamaño con animación en hover */}
          <div className="w-1/2 group-hover:animate-spin transition-transform duration-500">
            <Anemona />
          </div>

          {/* Bloque de "clases grupales" */}
          <div className="text-center px-4">
            <h2 className="text-3xl text-peach font-lafleur">
              Clases grupales
            </h2>
            <p className="text-peach font-comfortaa mt-2">
              Si querés tener la atención personalizada de un profesor para
              perfeccionar tu habilidad en un instrumento, contamos con clases
              individuales especializadas para cada alumno. si estás empezando
              de 0 esta es la mejor opción.
            </p>
          </div>

          {/* Bloque de "clases individuales" */}
          <div className="text-center px-4">
            <h2 className="text-3xl text-peach font-lafleur">
              Clases individuales
            </h2>
            <p className="text-peach font-comfortaa mt-2">
              Si contás con compañeros con los que quieran aprender juntos, el
              aprendizaje musical no solo lo permite sino que se beneficia de
              poder escuchar y tocar con alguien más o tienen por qué tocar el
              mismo instrumento. ideales para alumnos con alguna noción básica
              de un instrumento.
            </p>
          </div>

          {/* Anemona inferior a la mitad de tamaño con animación en hover */}
          <div className="w-1/2 group-hover:animate-spin transition-transform duration-500">
            <Anemona />
          </div>
        </div>
      </div>
    </>
  );
};

export default GrupalesIndividuales;
