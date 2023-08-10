import { useState } from "react";
import { FormEvents } from "../types";

const useAboutMe = () => {
  const [inputTextAbout, setinputTextAbout] = useState<string>("");

  const getInfoAbout = (e: FormEvents["change"]) => {
    setinputTextAbout(e.target.value);
  };

  return { inputTextAbout, getInfoAbout };
};

export default useAboutMe;
