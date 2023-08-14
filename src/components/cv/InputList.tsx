import { useRef } from "react";
import { FormEvents } from "../../types";

interface Props {
  input: string;
  setState: string;
  get: (e: FormEvents["change"], setState: string) => void;
  onEventAdd: (setState: string) => void;
  onEventRemove: (setState: string) => void;
  type: string;
  inputName: string;
  placeholder: string;
}

const InputList = ({
  input,
  setState,
  get,
  onEventAdd,
  onEventRemove,
  type,
  inputName,
  placeholder,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: FormEvents["change"]) => {
    get(e, setState);
  };

  const handleAddItem = () => {
    onEventAdd(setState);
    inputRef.current?.focus();
  };

  return (
    <div className="w-11/12 h-24">
      <label
        htmlFor={inputName}
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type={type}
          id={inputName}
          placeholder={placeholder}
          autoComplete="off"
          value={input}
          ref={inputRef}
          className="w-11/12 h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
          onChange={handleChange}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-slate-900 p-0.5 text-xs text-slate-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {placeholder}
        </span>
      </label>
      <div className="h-16 flex justify-evenly items-center">
        <button
          onClick={handleAddItem}
          className="w-24 h-11  rounded-md text-indigo-950  bg-indigo-200">
          Agregar
        </button>
        <button
          onClick={() => onEventRemove(setState)}
          className="w-24 h-11 rounded-md text-indigo-950  bg-indigo-200">
          Borrar
        </button>
      </div>
    </div>
  );
};

export default InputList;
