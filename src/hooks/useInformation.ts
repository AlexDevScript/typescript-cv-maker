import { useState } from "react";
import { FormEvents, InitialCv, NewList } from "../types";
import { initialInformation } from "../helpers/initialData";
import createNewList from "../helpers/createNewList";

const useInformation = () => {
  const [informationCv, setInformationCv] =
    useState<InitialCv>(initialInformation);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getInfoCv = (e: FormEvents["change"]) => {
    const { name, value } = e.target;

    setInformationCv({
      ...informationCv,
      information: {
        ...informationCv.information,
        [name]: value,
      },
      skills: {
        ...informationCv.skills,
        [name]: value,
      },
      aboutMe: {
        ...informationCv.aboutMe,
        [name]: value,
      },
    });
  };

  const getImage = (image: string): void => {
    setSelectedImage(image);
  };

  const [inputSoftSkill, setInputSoftSkill] = useState<string>("");
  const [listSkill, setListSkill] = useState<NewList[]>([]);

  const [inputLanguage, setInputLanguage] = useState<string>("");
  const [listLanguages, setListLanguages] = useState<NewList[]>([]);

  const getSkill = (e: FormEvents["change"], setState: string) => {
    if (setState === "soft") setInputSoftSkill(e.target.value);
    if (setState === "language") setInputLanguage(e.target.value);
  };

  const addSkill = (setState: string): void => {
    if (setState === "soft") {
      const newSkill = createNewList(inputSoftSkill);

      if (inputSoftSkill.trim() !== "") {
        setListSkill((prevItems) => [...prevItems, newSkill]);
        setInputSoftSkill("");
      }
    }

    if (setState === "language") {
      const newLanguage = createNewList(inputLanguage);

      if (inputLanguage.trim() !== "") {
        setListLanguages((prevItems) => [...prevItems, newLanguage]);
        setInputLanguage("");
      }
    }
  };

  const removeSkill = (setState: string): void => {
    if (setState === "soft")
      setListSkill((prevItems) => prevItems.slice(0, -1));

    if (setState === "language")
      setListLanguages((prevItems) => prevItems.slice(0, -1));
  };

  const getFunctionSkills = {
    getInfoCv,
    getImage,
    getSkill,
    addSkill,
    removeSkill,
  };

  const getInputs = {
    inputSoftSkill,
    inputLanguage,
  };

  const listsInfo = {
    listSkill,
    listLanguages,
    informationCv,
    selectedImage,
  };

  return {
    getInfoCv,
    getInputs,
    getFunctionSkills,
    listsInfo,
  };
};

export default useInformation;
