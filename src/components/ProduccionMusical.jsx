import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Stars from "../svgs/Stars";

export const ProduccionMusical = () => {
  return (
    <div className="my-24 mx-8 grid grid-cols-12 gap-4">
      {/* Columna 1-12 en mobile, 1-10 en md */}
      <div className="col-span-12 md:col-span-10 flex flex-col">
        {/* Sección de texto */}
        <div className="flex flex-col justify-center items-start gap-1 mb-6">
          <h1 className="font-lafleur text-peach text-4xl md:text-5xl font-thin">
            Estudio de grabación
          </h1>
          <div className="flex md:hidden items-center w-full md:ml-[-8px]">
            <div className="hidden md:block">
              {" "}
              <Stars />
            </div>

            <div className="flex-grow bg-peach h-0.5 mr-[-8px] md:mr-0 md:ml-[-8px] " />
            <div className="md:hidden">
              <Stars />
            </div>
          </div>
          <p className="font-comfortaa text-peach">
            Grabación, producción, mezcla y masterización
          </p>
        </div>

        {/* Contenedor de imagen */}
        <div className="relative w-full md:w-[100%] object-cover">
          <img
            src="/assets/estudio-de-grabacion.png"
            alt="Estudio de grabación"
            className="w-full h-[60vh] md:h-auto object-cover rounded-4xl md:-rounded opacity-80"
          />
          {/* Borde superpuesto con margen inset */}
          <div
            className="
              pointer-events-none
              absolute top-4 left-4 right-4 bottom-4
              border-2 border-peach
              rounded-3xl
            "
          />
          {/* Botón centrado sobre la imagen */}
          <div className="absolute bottom-16 inset-x-0 flex items-center justify-center">
            <Link to="/estudio-de-grabacion">
              <Button buttonTitle="Ver más" />
            </Link>
          </div>
        </div>
      </div>

      {/* Columna 11: Texto rotado */}
      <div className="col-span-1 md:flex hidden items-center lg:justify-center xl:justify-start">
        <p className="font-comfortaa text-peach md:text-transparent lg:text-peach  text-lg transform rotate-90 whitespace-nowrap">
          Expresá tus ideas en música
        </p>
      </div>

      {/* Columna 12: Estrellas y línea vertical */}
      <div className="col-span-1 hidden md:flex justify-end ">
        <div className="flex flex-col items-center">
          <Stars />
          <div className="w-0.5 bg-peach flex-grow my-[-13px]" />
          <Stars />
        </div>
      </div>
    </div>
  );
};

export default ProduccionMusical;
