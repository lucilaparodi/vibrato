import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Anemona from "../svgs/Anemona";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const VibratoSessions = () => {
  return (
    <section className="w-full lg:pt-10 px-8 text-peach">
      <div className="lg:w-[100%] xl:w-[80%] mx-auto grid grid-col-1 lg:grid-cols-6 gap-4">
        {/* Ítem 1: Título y descripción */}
        <div className="flex lg:col-span-2 flex-col justify-start lg:ml-20 text-center lg:text-left">
          <h1 className="font-lafleur text-4xl lg:text-7xl mb-2 leading-none inline-block">
            Vibrato sessions
          </h1>
          <p className="font-comfortaa text-sm lg:text-md lg:w-[300px] lg:mx-0">
            Fusionamos artistas de hip hop y géneros urbanos con KAOS, una banda
            de músicos completamente en vivo.
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
                src="/assets/jo-gonzalez.png"
                alt="Jo Gonzalez"
                className="w-11/12 lg:w-2/3"
              />
              <h3 className="font-lafleur text-4xl relative inline-block leading-none">
                <span
                  className="absolute top-2 left-0 pointer-events-none whitespace-nowrap opacity-50"
                  style={{
                    WebkitTextStroke: "1px #e9ab85",
                    color: "transparent",
                  }}
                >
                  Jo Gonzalez x KAOS
                </span>
                <span>Jo Gonzalez x KAOS</span>
              </h3>
              <a
                href="https://www.youtube.com/watch?v=3tkUYjVt0nE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button buttonTitle="Ver en youtube" />
              </a>
            </div>

            {/* Tarjeta 2 - CHN */}
            <div className="relative text-center flex flex-col items-center gap-4 group">
              <img
                src="/assets/chn.png"
                alt="CHN"
                className="w-11/12 lg:w-2/3"
              />
              <h3 className="font-lafleur text-4xl relative inline-block leading-none">
                <span
                  className="absolute top-2 left-0 pointer-events-none whitespace-nowrap opacity-50"
                  style={{
                    WebkitTextStroke: "1px #e9ab85",
                    color: "transparent",
                  }}
                >
                  CHN x KAOS
                </span>
                <span>CHN x KAOS</span>
              </h3>
              <a
                href="https://www.youtube.com/watch?v=FSKsTIXyQUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button buttonTitle="Ver en youtube" />
              </a>
            </div>

            {/* Tarjeta 3 - Seba Jones */}
            <div className="relative text-center flex flex-col items-center gap-4 group justify-self-end">
              <img
                src="/assets/seba-jones.png"
                alt="Seba Jones"
                className="w-11/12 lg:w-2/3"
              />
              <h3 className="font-lafleur text-4xl relative inline-block leading-none">
                <span
                  className="absolute top-2 left-0 pointer-events-none whitespace-nowrap opacity-50"
                  style={{
                    WebkitTextStroke: "1px #e9ab85",
                    color: "transparent",
                  }}
                >
                  Seba Jones x KAOS
                </span>
                <span>Seba Jones x KAOS</span>
              </h3>
              <a
                href="https://www.youtube.com/watch?v=iNlX-J9Oo4M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button buttonTitle="Ver en youtube" />
              </a>
            </div>
          </Slider>
        </div>
        {/* Ítem 2: Tarjeta 1 - Jo Gonzalez (Centrada) */}
        <div className="hidden lg:flex my-8 lg:my-0 relative lg:col-span-4 w-[320px] lg:w-[450px] lg:p-4 text-center flex flex-col items-center gap-4 group justify-self-center">
          <div className="hidden lg:flex absolute top-0 -right-28 z-[-1] origin-center flex-shrink-0 w-[300px] h-[300px] group-hover:animate-spin-slow">
            <Anemona width={300} height={300} />
          </div>

          <img
            src="/assets/jo-gonzalez.png"
            alt="Jo Gonzalez"
            className="w-2/3"
          />

          <h3 className="font-lafleur text-4xl relative inline-block leading-none">
            <span
              className="absolute top-2 left-0 pointer-events-none whitespace-nowrap opacity-50"
              style={{ WebkitTextStroke: "1px #e9ab85", color: "transparent" }}
            >
              Jo Gonzalez x KAOS
            </span>
            <span>Jo Gonzalez x KAOS</span>
          </h3>

          <a
            href="https://www.youtube.com/watch?v=3tkUYjVt0nE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonTitle="Ver en youtube" />
          </a>
        </div>

        {/* Ítem 3: Tarjeta 2 - CHN */}
        <div className="hidden lg:flex relative lg:col-span-3 w-[320px] lg:w-[450px] lg:p-4 text-center flex flex-col items-center gap-4 group">
          <div className="hidden lg:flex absolute -top-36 right-18 z-[-1] origin-center flex-shrink-0 w-[250px] h-[250px] group-hover:animate-spin-slow">
            <Anemona width={250} height={250} />
          </div>

          <img src="/assets/chn.png" alt="CHN" className="w-2/3" />

          <h3 className="font-lafleur text-4xl relative inline-block leading-none">
            <span
              className="absolute top-2 left-0 pointer-events-none whitespace-nowrap opacity-50"
              style={{ WebkitTextStroke: "1px #e9ab85", color: "transparent" }}
            >
              CHN x KAOS
            </span>
            <span>CHN x KAOS</span>
          </h3>

          <a
            href="https://www.youtube.com/watch?v=FSKsTIXyQUA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonTitle="Ver en youtube" />
          </a>
        </div>

        {/* Ítem 4: Tarjeta 3 - Seba Jones (A la derecha) */}
        <div className="hidden lg:flex my-8 lg:my-0 relative lg:col-span-3 w-[320px] lg:w-[450px] lg:p-4 text-center flex flex-col items-center gap-4 group justify-self-end">
          <div className="hidden lg:flex absolute top-0 right-72 z-[-1] origin-center flex-shrink-0 w-[300px] h-[300px] group-hover:animate-spin-slow">
            <Anemona width={300} height={300} />
          </div>

          <img
            src="/assets/seba-jones.png"
            alt="Seba Jones"
            className="w-2/3"
          />

          <h3 className="font-lafleur text-4xl relative inline-block leading-none">
            <span
              className="absolute top-2 left-0 pointer-events-none whitespace-nowrap opacity-50"
              style={{ WebkitTextStroke: "1px #e9ab85", color: "transparent" }}
            >
              Seba Jones x KAOS
            </span>
            <span>Seba Jones x KAOS</span>
          </h3>

          <a
            href="https://www.youtube.com/watch?v=iNlX-J9Oo4M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonTitle="Ver en youtube" />
          </a>
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
  );
};

export default VibratoSessions;
