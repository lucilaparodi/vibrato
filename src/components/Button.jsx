import React from "react";
import { IonIcon } from "@ionic/react";
import classNames from "classnames";

export const Button = ({ buttonTitle, onClick, icon, blue, small, type }) => {
  const buttonClasses = classNames(
    "relative rounded-full font-comfortaa flex items-center gap-3 overflow-hidden transition-all duration-300 border-2 group bg-transparent cursor-pointer",
    // Note: reemplazamos "hover:cursor-pointer" por "cursor-pointer"
    {
      "px-6 py-2 text-base": !small,
      "px-3 py-1 text-sm": small,
      "text-blue border-blue": blue,
      "text-peach border-peach": !blue,
    }
  );

  const gradientClasses = classNames(
    "absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 pointer-events-none",
    blue
      ? "bg-gradient-to-r from-blue-400 to-blue-600 group-hover:opacity-20"
      : "bg-gradient-to-r from-pink-400 to-pink-600 group-hover:opacity-30"
  );

  const textClasses = classNames("relative z-10 flex items-center gap-2", {
    "text-blue group-hover:text-blue": blue,
    "text-peach group-hover:text-white": !blue,
    "text-sm": small,
    "text-base": !small,
  });

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      <span className={gradientClasses} />
      <span className={textClasses}>
        {icon && <IonIcon icon={icon} className="text-inherit" />}
        <span>{buttonTitle}</span>
      </span>
    </button>
  );
};

export default Button;
