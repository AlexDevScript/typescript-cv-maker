import { useState } from "react";
import { FormEvents } from "../types";

const useColor = () => {
  const initialColor = "#425e85";
  const initialColorRgba = "rgba(66, 94, 133, 0.4)";

  const [color, setColor] = useState<string>(initialColor);
  const [rgbaColor, setRgbaColor] = useState<string>("");

  const handleResetColor = () => {
    setColor(initialColor);
    convertHexToRgba(initialColor);
  };

  const handleChangeColor = (e: FormEvents["change"]) => {
    const newColor = e.target.value;
    setColor(newColor);
    convertHexToRgba(color);
  };

  const convertHexToRgba = (color = initialColor) => {
    const alpha = 0.4;
    try {
      const cleanHex = color.replace("#", "");
      if (cleanHex.length !== 6) {
        throw new Error("Hex color should have 6 characters");
      }

      const r = parseInt(cleanHex.substring(0, 2), 16);
      const g = parseInt(cleanHex.substring(2, 4), 16);
      const b = parseInt(cleanHex.substring(4, 6), 16);

      if (isNaN(alpha) || alpha < 0 || alpha > 1) {
        throw new Error("Alpha value should be between 0 and 1");
      }

      const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      setRgbaColor(rgba);
    } catch (error) {
      console.error(error);
    }
  };

  const changeColor = {
    handleChangeColor,
    handleResetColor,
    color,
    rgbaColor,
    initialColorRgba,
  };

  return {
    changeColor,
    rgbaColor,
    initialColorRgba,
  };
};

export default useColor;
