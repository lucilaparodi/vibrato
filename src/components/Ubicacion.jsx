import React from "react";
import Stars from "../svgs/Stars";
import { Button } from "./Button";

const Ubicacion = () => {
  return (
    <div className="mt-28 md:mt-20 mb-20 mx-8 text-peach">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Columna principal (11 de 12) */}
        <div className="md:col-span-11 flex flex-col space-y-16">
          {/* FILA SUPERIOR */}
          <div className="flex flex-col md:flex-row items-center md:justify-end gap-8 md:gap-16">
            {/* Línea horizontal (acortada) */}
            <div className=" bg-peach h-0.5 w-full md:w-4/5 md:mr-[-75px]" />
            {/* Estrella */}
            <div className="flex-shrink-0">
              <Stars />
            </div>
            {/* Título */}
            <h1 className="font-lafleur text-4xl md:text-7xl font-thin whitespace-nowrap">
              Ubicación
            </h1>
          </div>

          {/* FILA INFERIOR: brújula + texto/botón EN LA MISMA COLUMNA */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
            {/* Imagen (Brújula) */}
            <div className="flex justify-center flex-1 min-w-[250px] transition-transform duration-300 transform hover:scale-105">
              <img
                src="/assets/brujula.png"
                alt="Brújula"
                className="w-[250px] md:w-[300px] object-contain"
              />
            </div>

            {/* Texto y botón */}
            <div className="flex flex-col flex-1 min-w-[250px] items-center md:items-start text-center md:text-left">
              <p className="font-comfortaa text-lg md:text-xl mb-2">
                Pocitos, Montevideo, Uruguay
              </p>
              <p className="font-comfortaa text-md mb-6">Calle Quayaquí 2927</p>
              <Button
                buttonTitle="Ver en google maps"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/8v458jxnvsVfVFFs9",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-col md:flex-row items-center md:justify-end gap-8 md:gap-16 mt-8">
          <Stars />
          <div className=" bg-peach h-0.5 w-full md:w-4/5 md:mr-[-75px]" />
        </div>
        {/* Columna (1 de 12) con la línea vertical y estrellas a la derecha */}
        <div className="hidden md:flex md:col-span-1 justify-end">
          <div className="flex flex-col items-center justify-center mt-4 w-[10px]">
            <Stars />
            <div
              className="w-0.5 bg-peach my-[-13px]"
              style={{ height: "400px" }}
            />
            <Stars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
