import React from "react"
import Slider from "react-slick"
import { useInView } from "react-intersection-observer"
import Stars from "../svgs/Stars"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Servicios = () => {
  const servicios = [
    {
      title: "Grabación",
      description:
        "Contá con nuestro espacio y nuestros equipos para la grabación de tu proyecto",
      img: "/assets/vinilo1.png"
    },
    {
      title: "Producción musical",
      description:
        "Producí tu tema desde cero en un espacio diseñado especialmente para inspirarte, con todas las herramientas necesarias para hacer que tu canción cobre vida",
      img: "/assets/vinilo1.png"
    },
    {
      title: "Mezcla y master",
      description:
        "La mezcla y el mastering son como un traje a medida, se hacen específicamente para cada canción con la mayor atención al detalle",
      img: "/assets/vinilo1.png"
    }
  ]

  // Animación de la línea horizontal
  const { ref: horizontalRef, inView: horizontalInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  // Configuración del slider para mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className="my-20 mx-8">
      {/* Título Global */}

      {/* Grid principal */}
      <div className="block md:hidden lg:block">
        <div className="grid grid-cols-12 gap-4">
          {/* Columna 1/12: Estrella y línea vertical */}
          <div className="col-span-1 hidden lg:flex flex-col items-center justify-center mt-1 w-[10px]">
            <Stars />
            <div
              className="w-0.5 bg-peach my-[-13px]"
              style={{ height: "500px" }}
            />
            <Stars />
          </div>

          {/* Contenido principal */}
          <div className="col-span-12 md:col-span-11">
            <div className="md:-mx-8">
              {/* Título y línea horizontal */}
              <div className="flex flex-col md:flex-row items-center justify-center">
                <h1 className="font-lafleur text-peach text-3xl lg:text-4xl xl:text-5xl font-thin mr-8 whitespace-nowrap xl:mr-20">
                  Servicios
                </h1>
                <div className="flex items-center w-full md:ml-[-8px]">
                  <div className="hidden md:block">
                    <Stars />
                  </div>
                  <div
                    ref={horizontalRef}
                    className={`flex-grow bg-peach h-0.5 mr-[-8px] md:mr-0 md:ml-[-8px] ${
                      horizontalInView ? "animate-lineFillHorizontal" : ""
                    }`}
                    style={{ width: horizontalInView ? "100%" : "0%" }}
                  />
                  <div className="md:hidden">
                    <Stars />
                  </div>
                </div>
              </div>
            </div>

            {/* Listado de servicios - Slider en mobile, grid en desktop */}
            <div className="w-full md:w-[90%] mt-8">
              {/* Versión slider para mobile */}
              <div className="md:hidden">
                <Slider {...sliderSettings}>
                  {servicios.map((curso, index) => {
                    // Definimos la rotación inicial según la posición:
                    const initialRotation =
                      index === 0 ? "0deg" : index === 1 ? "10deg" : "20deg"
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 p-4 rounded-md"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={curso.img}
                          alt={curso.title}
                          style={{
                            "--initial-rotation": initialRotation,
                            transform: `rotate(${initialRotation})`
                          }}
                          className="w-48 lg:w-64 h-auto object-contain transition-transform duration-300 spin-on-hover"
                        />
                        <h2 className="font-comfortaa text-peach text-lg md:text-xl text-center w-52 md:w-64">
                          {curso.title}
                        </h2>
                        <p className="font-comfortaa text-peach text-sm text-center w-52 md:w-64">
                          {curso.description}
                        </p>
                      </div>
                    )
                  })}
                </Slider>
              </div>
              {/* Versión grid para desktop */}
              <div className="hidden lg:flex flex-row justify-between gap-8">
                {servicios.map((curso, index) => {
                  const initialRotation =
                    index === 0 ? "0deg" : index === 1 ? "10deg" : "20deg"
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-4 p-4 rounded-md"
                    >
                      <img
                        src={curso.img}
                        alt={curso.title}
                        style={{
                          "--initial-rotation": initialRotation,
                          transform: `rotate(${initialRotation})`
                        }}
                        className="w-48 md:w-48 xl:w-64 h-auto object-contain transition-transform duration-300 spin-on-hover"
                      />
                      <h2 className="font-comfortaa text-peach text-lg md:text-sm lg:text-xl text-center w-52 md:w-48 xl:w-64">
                        {curso.title}
                      </h2>
                      <p className="font-comfortaa text-peach text-sm text-center w-52 md:w-48 xl:w-64">
                        {curso.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Versión para pantallas medianas (md) */}
      <div className="hidden md:block lg:hidden">
        <div className="lg:-mx-8">
          {/* Título y línea horizontal */}
          <div className="flex flex-col lg:flex-row lg:items-baseline items-center justify-center">
            <h1 className="font-lafleur text-peach text-3xl lg:text-4xl xl:text-5xl font-thin lg:mr-16 whitespace-nowrap">
              Servicios
            </h1>
            <div className="flex items-center w-full lg:ml-[-8px]">
              <div className="hidden lg:block">
                <Stars />
              </div>
              <div
                ref={horizontalRef}
                className={`flex-grow bg-peach h-0.5 mr-[-8px] lg:mr-0 lg:ml-[-8px] ${
                  horizontalInView ? "animate-lineFillHorizontal" : ""
                }`}
                style={{ width: horizontalInView ? "100%" : "0%" }}
              />
              <div className="lg:hidden">
                <Stars />
              </div>
            </div>
          </div>
        </div>

        {/* Listado de servicios */}
        <div className="w-full lg:w-[90%] mt-8">
          <div className="flex justify-center gap-10">
            {servicios.map((curso, index) => {
              const initialRotation =
                index === 0 ? "0deg" : index === 1 ? "10deg" : "20deg"
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 p-4 rounded-md"
                  style={{ display: "flex" }}
                >
                  <img
                    src={curso.img}
                    alt={curso.title}
                    style={{
                      "--initial-rotation": initialRotation,
                      transform: `rotate(${initialRotation})`
                    }}
                    className="w-36 h-auto object-contain transition-transform duration-300 spin-on-hover"
                  />
                  <h2 className="font-comfortaa text-peach text-md text-center w-26 lg:w-64">
                    {curso.title}
                  </h2>
                  <p className="font-comfortaa text-peach text-sm text-center w-26 lg:w-64">
                    {curso.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="hidden xl:flex flex-row justify-between gap-8">
            {servicios.map((curso, index) => {
              const initialRotation =
                index === 0 ? "0deg" : index === 1 ? "10deg" : "20deg"
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 p-4 rounded-md"
                >
                  <img
                    src={curso.img}
                    alt={curso.title}
                    style={{
                      "--initial-rotation": initialRotation,
                      transform: `rotate(${initialRotation})`
                    }}
                    className="w-48 lg:w-24 xl:w-64 h-auto object-contain transition-transform duration-300 spin-on-hover"
                  />
                  <h2 className="font-comfortaa text-peach text-lg lg:text-sm xl:text-xl text-center w-52 lg:w-48 xl:w-64">
                    {curso.title}
                  </h2>
                  <p className="font-comfortaa text-peach text-sm text-center w-52 lg:w-48 xl:w-64">
                    {curso.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Definición de animación y estilos adicionales */}
      <style>{`
        @keyframes lineFillHorizontal {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-lineFillHorizontal {
          animation: lineFillHorizontal 1s ease-out forwards;
        }
        .slick-dots li button:before {
          color: #F4C39B !important;
        }
        .slick-dots li.slick-active button:before {
          color: #F4C39B !important;
        }
        .slick-slide > div > div {
          display: flex !important;
        }
        @keyframes spinFrom {
          from {
            transform: rotate(var(--initial-rotation));
          }
          to {
            transform: rotate(calc(var(--initial-rotation) + 360deg));
          }
        }
        .spin-on-hover:hover {
          animation: spinFrom 2s linear infinite;
        }
      `}</style>
      <div className="flex justify-center md:hidden my-16">
        <Stars />
      </div>
    </div>
  )
}

export default Servicios
