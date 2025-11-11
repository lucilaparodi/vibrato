import React, { useState } from "react";

export const NumberInput = ({
  minValue = 1,
  maxValue = null,
  defaultValue = 1,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(
    value ? parseInt(value.slice(1), 10) : defaultValue
  );

  const handleChange = (e) => {
    let newVal = e.target.value;

    // Si está vacío, permitir que se vea vacío temporalmente
    if (newVal === "") {
      setInputValue("");
      return;
    }

    // Solo permitir números
    if (!/^\d+$/.test(newVal)) {
      return;
    }

    // Convertir a número
    const numVal = parseInt(newVal, 10);

    // Mostrar lo que escribió el usuario
    setInputValue(newVal);

    // Validar y ajustar al rango
    let finalVal = numVal;
    if (finalVal < minValue) {
      finalVal = minValue;
    }
    if (maxValue !== null && finalVal > maxValue) {
      finalVal = maxValue;
    }

    // Notificar al padre con el valor ajustado
    if (onChange) {
      onChange(`x${finalVal}`);
    }
  };

  const handleBlur = () => {
    // Si está vacío al salir del input, restaurar el valor anterior
    if (inputValue === "") {
      setInputValue(value ? parseInt(value.slice(1), 10) : defaultValue);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full pt-2.5 pb-2 px-5 md:w-20">
      <span className="font-comfortaa text-md text-black mr-1">x</span>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="flex-1 bg-transparent border-none focus:outline-none font-comfortaa text-md"
      />
    </div>
  );
};

export default NumberInput;
