import { useState } from "react";
import { FormEvents, Academy } from "../types";
import { initialAcademy } from "../helpers/initialData";

const useAcademy = () => {
  const [infoAcademy, setInfoAcademy] = useState<Academy>(initialAcademy);

  const getInfoAcademy = (e: FormEvents["change"]) => {
    const { name, value } = e.target;

    setInfoAcademy({ ...infoAcademy, [name]: value });
  };

  return { getInfoAcademy, infoAcademy };
};

export default useAcademy;
