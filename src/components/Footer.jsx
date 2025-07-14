import React from "react"
import { Link } from "react-router-dom"
import Stars from "../svgs/Stars"
import VibratoLogoPeach from "../components/VibratoLogoPeach"

// Iconos externos
import TikTok from "../svgs/TikTok"
import Instagram from "../svgs/Instagram"
import Whatsapp from "../svgs/Whatsapp"
import Youtube from "../svgs/Youtube"

const Footer = () => {
  return (
    <footer className="mx-4 pb-8">
      <div className="grid md:hidden lg:grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Estrellas laterales */}
        <div className="hidden md:flex justify-start">
          <div className="flex flex-col items-center">
            <Stars />
            <div
              className="w-0.5 bg-peach my-[-13px]"
              style={{ height: "150px" }}
            />
            <Stars />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="col-span-11 flex flex-wrap justify-between gap-8">
          {/* Logo */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Link
              to="/"
              className="cursor-pointer hover:brightness-115 hover:scale-105 transition-transform duration-300 flex justify-center items-center"
            >
              <VibratoLogoPeach />
            </Link>
          </div>

          {/* Links sección izquierda */}
          <div className="w-full md:w-auto text-center md:text-left">
            <ul className="space-y-2 font-comfortaa text-peach">
              <li>
                <Link to="/porfolio" className="hover:brightness-115">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <a
                  href="https://www.youtube.com/@vibratolab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-115"
                >
                  Cursos online
                </a>
              </li> */}
              <li>
                <Link to="/song-studio" className="hover:brightness-115">
                  Song studio
                </Link>
              </li>
              <li>
                <Link
                  to="/estudio-de-grabacion"
                  className="hover:brightness-115"
                >
                  Estudio de grabación
                </Link>
              </li>
            </ul>
          </div>

          {/* Links sección derecha */}
          <div className="w-full md:w-auto text-center md:text-left">
            <ul className="space-y-2 font-comfortaa text-peach">
              <li>
                <Link to="/contacto" className="hover:brightness-115">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/proximamente" className="hover:brightness-115">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link to="/proximamente" className="hover:brightness-115">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="w-full md:w-auto flex justify-center md:justify-end gap-6 items-center mr-3">
            <a
              href="https://www.tiktok.com/@vibrato.musica?_t=ZM-8tdkrbqgxld&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
            >
              <TikTok />
            </a>
            <a
              href="https://www.instagram.com/vibrato.musica/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
            >
              <Instagram />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B59898056557&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
            >
              <Whatsapp />
            </a>
            <a
              href="https://www.youtube.com/channel/UC98rNcooM-R9NH_kd768WIQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
      {/* ///// */}
      <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Estrellas laterales */}
        <div className="hidden md:flex justify-start">
          <div className="flex flex-col items-center">
            <Stars />
            <div
              className="w-0.5 bg-peach my-[-13px]"
              style={{ height: "150px" }}
            />
            <Stars />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="col-span-11 flex flex-wrap justify-between gap-8 mx-8">
          {/* Logo */}
          <div className="w-full md:w-auto flex flex-col items-center justify-center gap-6">
            <Link
              to="/"
              className="cursor-pointer hover:brightness-115 hover:scale-105 transition-transform duration-300 flex justify-center items-center"
            >
              <VibratoLogoPeach />
            </Link>
            <div className="w-full flex justify-center md:justify-center gap-5 md:gap-3 lg:gap-5 items-center">
              <a
                href="https://www.tiktok.com/@vibrato.musica?_t=ZM-8tdkrbqgxld&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
              >
                <TikTok />
              </a>
              <a
                href="https://www.instagram.com/vibrato.musica/#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
              >
                <Instagram />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B59898056557&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
              >
                <Whatsapp />
              </a>
              <a
                href="https://www.youtube.com/channel/UC98rNcooM-R9NH_kd768WIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-115 transform hover:scale-110 transition-transform duration-300"
              >
                <Youtube />
              </a>
            </div>
          </div>

          {/* Links sección izquierda */}
          <div className="w-full md:w-auto text-center md:text-left xs:text-md sm:text-sm md:text-sm">
            <ul className="space-y-2 font-comfortaa text-peach">
              <li>
                <Link to="/portfolio" className="hover:brightness-115">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <a
                  href="https://www.youtube.com/@vibratolab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-115"
                >
                  Cursos online
                </a>
              </li> */}
              <li>
                <Link to="/song-studio" className="hover:brightness-115">
                  Song studio
                </Link>
              </li>
              <li>
                <Link
                  to="/estudio-de-grabacion"
                  className="hover:brightness-115"
                >
                  Estudio de grabación
                </Link>
              </li>
            </ul>
          </div>

          {/* Links sección derecha */}
          <div className="w-full md:w-auto text-center md:text-left text-md md:text-sm lg:text-md">
            <ul className="space-y-2 font-comfortaa text-peach">
              <li>
                <Link to="/contacto" className="hover:brightness-115">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/proximamente" className="hover:brightness-115">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link to="/proximamente" className="hover:brightness-115">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
