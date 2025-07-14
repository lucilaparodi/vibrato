import React from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import Stars from "../svgs/Stars";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CursosOnline = () => {
  const cursos = [
    {
      title: "Grabación de voces en home studio",
      img: "/assets/microfono.png",
      link: "https://www.youtube.com/@vibratolab",
    },
    {
      title: "Incorporación de pistas en vivo",
      img: "/assets/laptop.png",
      link: "/proximamente",
    },
    {
      title: "Grabación de batería en home studio",
      img: "/assets/bateria.png",
      link: "/proximamente",
    },
  ];

  // Animación de la línea horizontal
  const { ref: horizontalRef, inView: horizontalInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Configuración del slider para mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="my-20 mx-8">
      {/* Grid principal */}
      <div className="block md:hidden lg:block">
        <div className="grid grid-cols-12 gap-4">
          {/* Columna 1/12: Estrella y línea vertical */}
          <div className="col-span-1 hidden lg:flex flex-col items-center justify-center mt-4 w-[10px]">
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
              <div className="flex flex-col md:flex-row md:items-baseline">
                <h1 className="font-lafleur text-peach text-4xl md:text-6xl lg:text-7xl font-thin md:mr-16 whitespace-nowrap">
                  Cursos online
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
              <p className="text-md md:text-lg font-comfortaa text-peach mt-2 md:mt-4">
                Aprendé herramientas de la tecnología del sonido para potenciar
                tu musicalidad
              </p>
            </div>

            {/* Listado de cursos - Slider en mobile, grid en desktop */}
            <div className="w-full md:w-[90%] mt-8">
              <div className="md:hidden">
                <Slider {...sliderSettings}>
                  {cursos.map((curso, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-4 p-4 rounded-md"
                      style="display: flex;"
                    >
                      <img
                        src={curso.img}
                        alt={curso.title}
                        className="w-48 lg:w-64 h-auto object-contain transition-transform duration-300 transform hover:scale-105"
                      />
                      <h2 className="font-comfortaa text-peach text-lg md:text-xl text-center w-52 md:w-64">
                        {curso.title}
                      </h2>
                      {curso.link.startsWith("http") ? (
                        <a
                          href={curso.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button buttonTitle="Ver más" />
                        </a>
                      ) : (
                        <Link to={curso.link}>
                          <Button buttonTitle="Ver más" />
                        </Link>
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="hidden lg:flex flex-row justify-between gap-8">
                {cursos.map((curso, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 p-4 rounded-md"
                  >
                    <img
                      src={curso.img}
                      alt={curso.title}
                      className="w-48 md:w-48 xl:w-64 h-auto object-contain transition-transform duration-300 transform hover:scale-105"
                    />
                    <h2 className="font-comfortaa text-peach text-lg md:text-sm lg:text-xl text-center w-52 md:w-48 xl:w-64">
                      {curso.title}
                    </h2>
                    {curso.link.startsWith("http") ? (
                      <a
                        href={curso.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button buttonTitle="Ver más" />
                      </a>
                    ) : (
                      <Link to={curso.link}>
                        <Button buttonTitle="Ver más" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <div className="lg:-mx-8">
          {/* Título y línea horizontal */}
          <div className="flex flex-col lg:flex-row lg:items-baseline">
            <h1 className="font-lafleur text-peach text-4xl lg:text-6xl xl:text-7xl font-thin lg:mr-16 whitespace-nowrap">
              Cursos online
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
          <p className="text-md lg:text-lg font-comfortaa text-peach mt-2 lg:mt-4">
            Aprendé herramientas de la tecnología del sonido para potenciar tu
            musicalidad
          </p>
        </div>

        {/* Listado de cursos - Slider en mobile, grid en desktop */}
        <div className="w-full lg:w-[90%] mt-8">
          <div className="flex justify-center gap-10">
            {cursos.map((curso, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 p-4 rounded-md"
                style={{ display: "flex" }}
              >
                <img
                  src={curso.img}
                  alt={curso.title}
                  className="w-36 h-auto object-contain transition-transform duration-300 transform hover:scale-105"
                />
                <h2 className="font-comfortaa text-peach text-md text-center w-26 lg:w-64">
                  {curso.title}
                </h2>
                {curso.link.startsWith("http") ? (
                  <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button buttonTitle="Ver más" />
                  </a>
                ) : (
                  <Link to={curso.link}>
                    <Button buttonTitle="Ver más" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="hidden xl:flex flex-row justify-between gap-8">
            {cursos.map((curso, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-4 rounded-md"
              >
                <img
                  src={curso.img}
                  alt={curso.title}
                  className="w-48 lg:w-24 xl:w-64 h-auto object-contain transition-transform duration-300 transform hover:scale-105"
                />
                <h2 className="font-comfortaa text-peach text-lg lg:text-sm xl:text-xl text-center w-52 lg:w-48 xl:w-64">
                  {curso.title}
                </h2>
                {curso.link.startsWith("http") ? (
                  <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button buttonTitle="Ver más" />
                  </a>
                ) : (
                  <Link to={curso.link}>
                    <Button buttonTitle="Ver más" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Definición de animación */}
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
        .slick-slide > div > div{
          display: flex !important;
        }
      `}</style>
    </div>
  );
};

export default CursosOnline;
