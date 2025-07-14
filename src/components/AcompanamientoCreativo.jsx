import React from "react"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import Anemona from "../svgs/Anemona"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

const AcompanamientoCreativo = () => {
  return (
    <section className="w-full lg:pt-10 px-8 pb-24 text-peach">
      <div className="lg:w-[100%] xl:w-[80%] mx-auto grid grid-col-1 lg:grid-cols-6 gap-x-12 md:gap-y-20">
        {/* Ítem 1: Título y descripción */}
        <div className="flex lg:col-span-2 flex-col justify-start lg:ml-20 text-center lg:text-left ">
          <h1 className="font-lafleur text-4xl lg:text-6xl mb-2 leading-none inline-block">
            Acompañamiento creativo
          </h1>
          <p className="font-comfortaa text-sm lg:text-md lg:w-[300px] lg:mx-0">
            Crear una canción exitosamente puede ser difícil cuando trabajás
            solo con tus ideas, por lo que el acompañamiento creativo te brinda
            el intercambio de perspectivas al colaborar con un profesional de la
            música
          </p>
        </div>
        <div className="lg:hidden relative mt-32 flex justify-center">
          <div className="flex lg:hidden absolute top-[-15vh] z-[-1] justify-center">
            <Anemona width={250} height={250} />
          </div>
          <Slider {...sliderSettings} className="w-[75vw]">
            {/* Tarjeta 1 - Jo Gonzalez */}
            <div className="relative text-center flex flex-col items-center gap-4 group justify-self-center mb-5">
              <img
                src="/assets/photo3.png"
                alt="bajo"
                className="w-11/12 lg:w-2/3"
              />
              <h3 className="font-comfortaa text-xl relative inline-block">
                <span>
                  Podés tener una buena idea con un instrumento que no dominas
                </span>
              </h3>
            </div>

            {/* Tarjeta 2 - CHN */}
            <div className="relative text-center flex flex-col items-center gap-4 group justify-self-center mb-5">
              <img
                src="/assets/photo2.png"
                alt="microfono"
                className="w-11/12 lg:w-2/3"
              />
              <h3 className="font-comfortaa text-xl relative inline-block">
                <span>
                  Podés necesitar una idea fresca y original para enriquecer tu
                  canción
                </span>
              </h3>
            </div>

            {/* Tarjeta 3 - Seba Jones */}
            <div className="relative text-center flex flex-col items-center gap-4 group justify-self-center mb-5">
              <img
                src="/assets/photo1.png"
                alt="amplificador"
                className="w-11/12 lg:w-2/3"
              />
              <h3 className="font-comfortaa text-xl relative inline-block">
                <span>
                  Si no grabás en nuestro estudio, el acompañamiento impulsa tu
                  proyecto
                </span>
              </h3>
            </div>
          </Slider>
        </div>
        {/* Ítem 2: Tarjeta 1 - Jo Gonzalez (Centrada) */}
        <div className="hidden lg:flex my-8 lg:my-0 relative lg:col-span-4 w-[320px] lg:w-[450px] lg:p-4 text-center flex flex-col items-center gap-4 group justify-self-center">
          <div className="hidden lg:flex absolute top-0 -right-28 z-[-1] origin-center flex-shrink-0 w-[300px] h-[300px] group-hover:animate-spin-slow">
            <Anemona width={300} height={300} />
          </div>

          <img src="/assets/photo3.png" alt="bajo" className="w-2/3" />

          <h3 className="font-comfortaa text-xl relative inline-block">
            <span>
              Podés tener una buena idea con un instrumento que no dominás
            </span>
          </h3>
        </div>

        {/* Ítem 3: Tarjeta 2 - CHN */}
        <div className="hidden lg:flex relative lg:col-span-3 w-[320px] lg:w-[450px] lg:p-4 text-center flex flex-col items-center gap-4 group">
          <div className="hidden lg:flex absolute -top-36 right-18 z-[-1] origin-center flex-shrink-0 w-[250px] h-[250px] group-hover:animate-spin-slow">
            <Anemona width={250} height={250} />
          </div>

          <img src="/assets/photo2.png" alt="microfono" className="w-2/3" />

          <h3 className="font-comfortaa text-xl relative inline-block">
            <span>
              Podés necesitar una idea fresca y original para enriquecer tu
              canción
            </span>
          </h3>
        </div>

        {/* Ítem 4: Tarjeta 3 - Seba Jones (A la derecha) */}
        <div className="hidden lg:flex my-8 lg:my-0 relative lg:col-span-3 w-[320px] lg:w-[450px] lg:p-4 text-center flex flex-col items-center gap-4 group justify-self-end">
          <div className="hidden lg:flex absolute top-0 right-72 z-[-1] origin-center flex-shrink-0 w-[300px] h-[300px] group-hover:animate-spin-slow">
            <Anemona width={300} height={300} />
          </div>

          <img src="/assets/photo1.png" alt="amplificador" className="w-2/3" />

          <h3 className="font-comfortaa text-xl relative inline-block">
            <span>
              Si no grabás en nuestro estudio, el acompañamiento impulsa tu
              proyecto
            </span>
          </h3>
        </div>
      </div>

      {/* Estilos de animación custom */}
      <style>
        {`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
          .slick-dots li.slick-active button:before {
          color: #F4C39B !important;
          }
          .slick-slide > div > div {
          display: flex !important;
         }
        `}
      </style>
    </section>
  )
}

export default AcompanamientoCreativo
