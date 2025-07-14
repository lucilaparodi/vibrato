import Header from "../components/Header"
import Footer from "../components/Footer"
import Servicios from "../components/Servicios"
import AcompanamientoCreativo from "../components/AcompanamientoCreativo"
import Estudio from "../components/Estudio"

export function EstudioDeGrabacion() {
  return (
    <>
      <div className="relative m-auto gradient-background">
        <div className="w-[95%] max-w-[1700px] m-auto relative z-10">
          <Header />
          <Estudio />
          <AcompanamientoCreativo />
          <Servicios />

          {/* <Trabajos /> */}
          <Footer />
        </div>
        <div className="absolute inset-0 grain z-0"></div>
      </div>
    </>
  )
}
