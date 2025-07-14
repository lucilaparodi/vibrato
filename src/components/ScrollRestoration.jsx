import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que se monta en tu App.js (o layout principal)
 * y gestiona la restauración de scroll.
 */
const ScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef({});

  useEffect(() => {
    // Al montar el componente para la nueva ruta:
    // 1. Buscar si tenemos guardado el scroll previo para esa `location.key`.
    // 2. Si existe, restaurarlo. Si no, default a 0.
    const savedPosition = scrollPositions.current[location.key];
    window.scrollTo(0, savedPosition || 0);

    // Al desmontar (o al cambiar de ruta), guardamos la posición.
    return () => {
      scrollPositions.current[location.key] = window.scrollY;
    };
  }, [location]);

  return null; // No renderiza nada en pantalla, solo maneja la lógica.
};

export default ScrollRestoration;
