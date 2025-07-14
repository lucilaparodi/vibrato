import React from "react"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import Stars from "../svgs/Stars"

export const ClasesDeMusica = () => {
  return (
    <div className="my-24 mx-8 grid grid-cols-12 gap-4">
      {/* Columna 1: Estrellas y línea vertical (lado izquierdo) */}
      <div className="col-span-1 hidden md:flex justify-start">
        <div className="flex flex-col items-center">
          <Stars />
          <div className="w-0.5 bg-peach flex-grow my-[-13px]" />
          <Stars />
        </div>
      </div>

      {/* Columna 2: Texto rotado */}
      <div className="col-span-1 hidden md:flex items-center lg:justify-center xl:justify-end">
        <p className="font-comfortaa text-peach md:text-transparent lg:text-peach text-lg transform -rotate-90 whitespace-nowrap">
          Potenciá tus habilidades
        </p>
      </div>

      {/* Columnas 3-12 en mobile, 3-10 en md */}
      <div className="col-span-12 md:col-span-10 flex flex-col items-end">
        {/* Sección de texto */}
        <div className="flex flex-col items-end gap-1 mb-6 w-full">
          <h1 className="font-lafleur text-peach text-4xl md:text-5xl font-thin text-right">
            Clases de música
          </h1>
          <div className="flex md:hidden items-center w-full md:mr-[-8px]">
            <div className="md:hidden">
              <Stars />
            </div>
            <div className="flex-grow bg-peach h-0.5 ml-[-8px] md:ml-0 md:mr-[-8px]" />
            <div className="hidden md:block">
              <Stars />
            </div>
          </div>
          <p className="font-comfortaa text-peach text-right">
            Guitarra, piano, batería, bajo, producción musical y más
          </p>
        </div>

        {/* Contenedor de imagen */}
        <div className="relative w-full md:w-[100%] object-cover">
          <img
            src="/assets/clases.png"
            alt="Clases de música"
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
          {/* <div className="absolute bottom-16 inset-x-0 flex items-center justify-center">
            <Link to="/Clases">
              <Button buttonTitle="Ver más" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ClasesDeMusica
