import { Color } from "../../types";
import Button from "./Button";

interface Props {
  changeColor: Color;
}

const ColorPicker = ({ changeColor }: Props) => {
  const { color, handleChangeColor, handleResetColor } = changeColor;

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      <label htmlFor="color" className="flex">
        Selecciona el color de tu agrado
        <input
          className="w-20 mx-3"
          type="color"
          id="color"
          value={color}
          onChange={handleChangeColor}
        />
      </label>

      <Button onClick={handleResetColor}>Restaurar color</Button>
    </div>
  );
};

export default ColorPicker;
