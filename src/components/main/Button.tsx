interface Props {
  color?: "blue" | "indigo";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ color, onClick, children }: Props) => {
  const colorButton = (color = "blue"): string => {
    if (color === "indigo") {
      return "bg-indigo-400 hover:bg-indigo-500  border-b-indigo-800 border-x-indigo-500 border-4";
    }
    return "bg-blue-400 hover:bg-blue-500  border-b-blue-800 border-x-blue-500 border-4";
  };

  return (
    <div
      className={`w-40 h-10 mx-auto  ${colorButton(
        color
      )}  flex justify-center items-center text-white tracking-wide rounded m-4 active:scale-90 ease-out duration-100 ring-white active:ring-2`}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
