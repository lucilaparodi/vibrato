import { Button } from "./Button";
import { Link } from "react-router-dom";
import ModelViewer from "./ModelViewer";

export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row my-5 mt-10 md:my-20 justify-between items-center flex-grow gap-10 mx-8">
      {/* Sección de imagen */}
      <div className="flex justify-end items-center flex-grow order-1 md:order-2">
        {/* <ModelViewer /> */}
        <img
          src="/assets/instrumentos.png"
          alt="tocadiscos"
          className="max-w-full max-h-full object-contain text-peach"
        />
      </div>

      {/* Sección de texto */}
      <div className="md:w-3/5 flex flex-col justify-center items-start flex-grow gap-6 lg:mt-[-80px] order-2 md:order-1">
        <h1 className="font-comfortaa text-peach text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin">
          Un espacio donde los artistas encuentran confianza para crear sin
          límites
        </h1>
        <Link to="agendar-calendly">
          <Button buttonTitle="Agenda online" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
