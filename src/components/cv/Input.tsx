import { FormEvents } from "../../types";

interface Props {
  width?: string;
  type: string;
  inputName: string;
  placeholder: string;
  onChange?: (e: FormEvents["change"]) => void;
}

const Input = ({
  width = "w-[45%]",
  type,
  inputName,
  placeholder,
  onChange,
}: Props) => {
  return (
    <label
      htmlFor={inputName}
      className={`${width} relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}>
      <input
        type={type}
        name={inputName}
        id={inputName}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full h-10 text-sm text-center peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
        onChange={onChange}
      />

      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-slate-900 p-0.5 text-xs text-slate-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {placeholder}
      </span>
    </label>
  );
};

export default Input;
