import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { Home } from "./routes/Home"
import "./index.css"
import { CompasStudio } from "./routes/CompasStudio"
import "../i18n"
import { PreviewPage } from "./routes/PreviewPage"
import ScrollRestoration from "./components/ScrollRestoration"
import { EstudioDeGrabacion } from "./routes/EstudioDeGrabacion"
import { Clases } from "./routes/Clases"
import { Contacto } from "./routes/Contacto"
import { Proximamente } from "./routes/Proximamente"
import AgendarCalendly from "./routes/AgendarCalendly"
import Portfolio from "./routes/Portfolio"

/** Aquí deberías importar tu componente Agendar */
// import { Agendar } from "./routes/Agendar"; // <--- Asegúrate de crearlo o importarlo

function App() {
  return (
    // <GoogleOAuthProvider clientId="TU_CLIENT_ID.apps.googleusercontent.com">
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        {/* Rutas de tu app */}
        <Route path="agendar-calendly" element={<AgendarCalendly />} />
        <Route path="estudio-de-grabacion" element={<EstudioDeGrabacion />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="proximamente" element={<Proximamente />} />
        <Route path="/" element={<Home />} />
        <Route path="/song-studio" element={<CompasStudio />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
    // </GoogleOAuthProvider>
  )
}

export default App
