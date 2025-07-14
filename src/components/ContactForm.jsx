import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import { IonSpinner } from "@ionic/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Activa el loader

    try {
      const result = await emailjs.sendForm(
        "service_lnhu3ph", // serviceID
        "template_4byd49w", // templateID
        form.current, // el elemento del formulario
        "r7UAZefFkQfmccBum" // userID (clave pública)
      );
      console.log(result.text);
      toast.success("mail enviado"),
        {
          position: "top-center",
          autoClose: 300,
        };
      form.current.reset();
    } catch (error) {
      console.error(error.text || error);
      toast.error("error al enviar el mail"),
        {
          position: "top-center",
          autoClose: 300,
        };
    } finally {
      setLoading(false); // Desactiva el loader
    }
  };

  return (
    <div className="relative w-full max-w-lg rounded-xl shadow-lg overflow-hidden border-2 border-peach">
      {/* Loader overlay (solo abarca el contenedor del formulario) */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center menu-gradient bg-opacity-50 backdrop-blur-sm">
          <IonSpinner
            name="crescent"
            style={{ "--ion-spinner-color": "var(--color-peach)" }}
            className="w-24 h-24 text-peach"
          />
        </div>
      )}

      {/* Fondo con opacidad */}
      <div className="absolute inset-0 gradient-menu opacity-50"></div>

      {/* Contenido que se muestra por encima del fondo */}
      <div className="relative p-8">
        <h2 className="font-comfortaa text-peach text-2xl mb-6 text-center">
          Mandanos un mensaje
        </h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          {/* Campo de Nombre */}
          <div>
            <label className="font-comfortaa text-peach text-md mb-1 block">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Tu nombre"
              className="w-full pt-2.5 pb-2 px-5 bg-white border border-gray-300 rounded-full focus:outline-none font-comfortaa text-md"
            />
          </div>
          {/* Campo de Email */}
          <div>
            <label className="font-comfortaa text-peach text-md mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="tu@correo.com"
              className="w-full pt-2.5 pb-2 px-5 bg-white border border-gray-300 rounded-full focus:outline-none font-comfortaa text-md"
            />
          </div>
          {/* Campo de Mensaje */}
          <div>
            <label className="font-comfortaa text-peach text-md mb-1 block">
              Mensaje
            </label>
            <textarea
              name="message"
              required
              placeholder="Escribí acá tu mensaje"
              rows="5"
              className="w-full pt-2.5 pb-2 px-5 bg-white border border-gray-300 rounded-xl focus:outline-none font-comfortaa text-md resize-none"
            ></textarea>
          </div>
          {/* Botón de Enviar */}
          <div>
            <Button buttonTitle="Enviar" type="submit" />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
