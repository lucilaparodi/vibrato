import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import ProduccionMusical from "../components/ProduccionMusical"
import ClasesDeMusica from "../components/ClasesDeMusica"
import VibratoSessions from "../components/VibratoSessions"
import Ubicacion from "../components/Ubicacion"
import Footer from "../components/Footer"
import Trabajos from "../components/Trabajos"

export const Home = () => {
  return (
    <>
      <div className="relative m-auto gradient-background2">
        <div className="w-[95%] max-w-[1700px] m-auto relative z-10">
          <Header />
          <Banner />
          <ProduccionMusical />
          <h1 className="mx-8 mb-[-100px] text-peach font-lafleur text-3xl lg:text-4xl xl:text-5xl">
            Portfolio
          </h1>
          <Trabajos />
          <VibratoSessions />
          {/* <CursosOnline /> */}

          <ClasesDeMusica />

          <Ubicacion />
          <Footer />
        </div>
        <div className="absolute inset-0 grain z-0"></div>
      </div>
    </>
  )
}
