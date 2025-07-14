import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Ubicacion from "../components/Ubicacion";
import Whatsapp from "../svgs/Whatsapp"; // Asegúrate de que la ruta sea correcta
import Mail from "../svgs/Mail"; // Asegúrate de que la ruta sea correcta

export function Contacto() {
  return (
    <>
      <div className="relative m-auto gradient-background">
        <div className="w-[95%] max-w-[1700px] m-auto relative z-10">
          <Header />
          <h1 className="text-center font-lafleur text-peach text-4xl md:text-7xl mb-12  my-20 mx-8">
            Contacto
          </h1>
          <div className="flex flex-col lg:flex-row justify-center mx-8 gap-20 lg:gap-52 md:my-32">
            <ContactForm />
            {/* Sección de contacto directo */}
            <div className="flex flex-col items-center justify-center gap-8">
              <h2 className="font-comfortaa text-peach text-2xl text-center">
                Contactate directamente
              </h2>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <Whatsapp className="w-8 h-8" />
                  <span className="font-comfortaa text-peach text-md">
                    +598 98 056 557
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8" />
                  <span className="font-comfortaa text-peach text-md">
                    vibratomusicauy@gmail.com
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src="/assets/guitarra.png"
                  alt="Guitarra"
                  className="w-full max-w-sm transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <Ubicacion />
          <Footer />
        </div>
        <div className="absolute inset-0 grain z-0"></div>
      </div>
    </>
  );
}
