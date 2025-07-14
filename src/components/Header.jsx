import React, { useState } from "react"
import { IonIcon } from "@ionic/react"
import { menuOutline, closeOutline } from "ionicons/icons"
import { Link } from "react-router-dom"
import VibratoLogoPeach from "../components/VibratoLogoPeach"

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      {/* Versión de escritorio: visible desde 964px en adelante */}
      <div className="hidden min-[964px]:flex items-center justify-between py-6 pt-10 px-8 relative">
        {/* Menú izquierdo: "estudio de grabación" y "clases" */}
        <nav className="flex gap-10 font-thin">
          <Link to="/estudio-de-grabacion">
            <div className="font-comfortaa text-peach text-heading cursor-pointer hover:brightness-115">
              Estudio de grabación
            </div>
          </Link>
          <Link to="/portfolio">
            <div className="font-comfortaa text-peach text-heading cursor-pointer hover:brightness-115">
              Portfolio
            </div>
          </Link>
        </nav>

        {/* Logo centrado de forma absoluta */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:brightness-115 hover:scale-105 transition-transform duration-300"
        >
          <VibratoLogoPeach />
        </Link>

        {/* Menú derecho: "contacto" y "song studio" */}
        <div className="flex gap-10 items-center">
          <Link to="/contacto">
            <div className="font-comfortaa text-peach text-heading cursor-pointer hover:brightness-115">
              Contacto
            </div>
          </Link>
          <Link to="/song-studio">
            <div className="font-comfortaa font-thin text-peach text-heading cursor-pointer hover:brightness-115">
              Song studio
            </div>
          </Link>
        </div>
      </div>

      {/* Versión móvil: visible para pantallas menores a 964px */}
      <div className="min-[964px]:hidden relative z-50">
        <div className="flex items-center justify-between py-6 px-4 w-full">
          {/* Botón de menú hamburguesa a la izquierda */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="bg-transparent border-none flex items-center p-0"
          >
            <IonIcon
              icon={isMobileMenuOpen ? closeOutline : menuOutline}
              className={`text-peach transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              style={{ fontSize: "30px" }}
            />
          </button>

          {/* Logo centrado */}
          <Link to="/" className="flex-1 flex justify-center">
            <VibratoLogoPeach className="cursor-pointer hover:brightness-115" />
          </Link>

          {/* Espacio reservado para simetrizar (ancho similar al botón) */}
          <div style={{ width: "30px" }}></div>
        </div>

        {/* Menú desplegable: se posiciona de forma absoluta para no afectar al resto del layout */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-10 mx-4 mt-2 bg-white rounded-md border-2 border-peach shadow-lg animate-slide-down text-sm gradient-menu">
            <nav className="flex flex-col gap-4 p-4">
              <Link to="/estudio-de-grabacion">
                <div className="font-comfortaa text-peach text-heading cursor-pointer hover:brightness-115">
                  Estudio de grabación
                </div>
              </Link>
              <Link to="/portfolio">
                <div className="font-comfortaa text-peach text-heading cursor-pointer hover:brightness-115">
                  Portfolio
                </div>
              </Link>
              <Link to="/contacto">
                <div className="font-comfortaa text-peach text-heading cursor-pointer hover:brightness-115">
                  Contacto
                </div>
              </Link>
              <Link to="/song-studio">
                <div className="font-comfortaa font-thin text-peach text-heading cursor-pointer hover:brightness-115">
                  Song studio
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}

export default Header
