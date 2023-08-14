import { initialExperienceWork } from "../helpers/initialData";
import createNewList from "../helpers/createNewList";
import { FormEvents, ExperienceWork, NewList } from "../types";
import { useState } from "react";

const useWorkExperience = () => {
  const [listExperienceWork, setListExperienceWork] = useState<ExperienceWork>(
    initialExperienceWork
  );

  const getExperience = (e: FormEvents["change"]) => {
    const { name, value } = e.target;

    setListExperienceWork({
      ...listExperienceWork,
      [name]: value,
    });
  };

  const [listResponsabilitysWork, setListResponsabilitysWork] = useState<
    NewList[]
  >([]);
  const [inputResponsabilityWork, setInputResponsabilityWork] =
    useState<string>("");

  const [listResponsabilitysWork2, setListResponsabilitysWork2] = useState<
    NewList[]
  >([]);
  const [inputResponsabilityWork2, setInputResponsabilityWork2] =
    useState<string>("");

  const getResponsibility = (e: FormEvents["change"], setState: string) => {
    if (setState === "work") {
      setInputResponsabilityWork(e.target.value);
    }

    if (setState === "work2") {
      setInputResponsabilityWork2(e.target.value);
    }
  };

  const addResponsability = (setState: string) => {
    if (setState === "work") {
      const newResponsability = createNewList(inputResponsabilityWork);

      if (inputResponsabilityWork.trim() !== "") {
        setListResponsabilitysWork((prevItems) => [
          ...prevItems,
          newResponsability,
        ]);
        setInputResponsabilityWork("");
      }
    }
    if (setState === "work2") {
      const newResponsability2 = createNewList(inputResponsabilityWork2);

      if (inputResponsabilityWork2.trim() !== "") {
        setListResponsabilitysWork2((prevItems) => [
          ...prevItems,
          newResponsability2,
        ]);
        setInputResponsabilityWork2("");
      }
    }
  };

  const removeResponsibility = (setState: string) => {
    if (setState === "work") {
      setListResponsabilitysWork((prevItems) => prevItems.slice(0, -1));
    }

    if (setState === "work2") {
      setListResponsabilitysWork2((prevItems) => prevItems.slice(0, -1));
    }
  };

  const getInputsWorkResponsability = {
    inputResponsabilityWork,
    inputResponsabilityWork2,
  };

  const listsWork = {
    listExperienceWork,
    listResponsabilitysWork,
    listResponsabilitysWork2,
  };

  const getFunctionWork = {
    addResponsability,
    removeResponsibility,
  };

  const getInfo = {
    getExperience,
    getResponsibility,
  };

  return {
    getFunctionWork,
    getInputsWorkResponsability,
    getInfo,
    listsWork,
  };
};

export default useWorkExperience;
