import React, { useState } from "react";
import classNames from "classnames";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";

export const Select = ({
  options = ["x1", "x2", "x3", "x4", "x5"],
  defaultValue = "x1",
  value,
  onChange,
  blue = false,
  small = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option) => {
    // Avisamos al padre
    if (onChange) {
      onChange(option);
    }
    // Cerramos el dropdown
    setIsOpen(false);
  };

  // Styles similar to your Button component
  const buttonClasses = classNames(
    "relative rounded-full font-comfortaa flex items-center gap-3 overflow-hidden",
    "transition-all duration-300 border-2 group bg-transparent hover:bg-transparent",
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

  const displayedOption = value || options[0];

  return (
    <div className="relative z-20 inline-block">
      <button onClick={toggleDropdown} className={buttonClasses}>
        <span className={gradientClasses} />
        <span className={textClasses}>
          <span>{displayedOption}</span>
          <IonIcon icon={chevronDownOutline} className="text-inherit" />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-blue-200 rounded-2xl shadow-md font-comfortaa text-blue overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
