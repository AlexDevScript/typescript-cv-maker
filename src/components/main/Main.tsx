import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import Cv from "../cv/Cv";
import PersonalDetails from "./details/PersonalDetails";
import SkillsDetails from "./details/SkillsDetails";
import useInformation from "../../hooks/useInformation";
import AboutMeDetails from "./details/AboutMeDetails";
import WorkExperienceDetails from "./details/WorkExperienceDetails";
import useWorkExperience from "../../hooks/useWorkExperience";
import AcademyLevelDetails from "./details/AcademyLevelDetails";
import useAcademy from "../../hooks/useAcademy";
import useColor from "../../hooks/useColor";

const Main = () => {
  const [isShowExperience, setIsShowExperience] = useState<boolean>(true);

  const handleToggle = () => {
    setIsShowExperience(!isShowExperience);
  };
  const {
    selectedImage,
    getImage,
    getInfoCv,
    informationCv,
    inputSoftSkill,
    inputLanguage,
    getSkill,
    addSkill,
    removeSkill,
    listSkill,
    listLanguages,
  } = useInformation();

  const {
    inputExperienceWork,
    listResponsabilitysWork,
    listResponsabilitysWork2,
    inputResponsabilityWork,
    inputResponsabilityWork2,
    handleAddResponsability,
    handleRemoveResponsibility,
    getExperience,
    getResponsibility,
  } = useWorkExperience();

  const { getInfoAcademy, infoAcademy } = useAcademy();

  const { color, rgbaColor, handleChangeColor, handleResetColor } = useColor();

  const componentPDF = useRef<HTMLDivElement>(null);

  const handlePDF = useReactToPrint({
    content: () => componentPDF.current,
  });

  const skillsDetailProps = {
    inputSoftSkill,
    inputLanguage,
    getSkill,
    addSkill,
    removeSkill,
    getInfoCv,
  };

  const WorkExperienceDetailsProps = {
    getResponsibility,
    getExperience,
    handleAddResponsability,
    inputResponsabilityWork,
    inputResponsabilityWork2,
    handleRemoveResponsibility,
    handleToggle,
    isShowExperience,
  };

  return (
    <main className="w-11/12 m-auto flex  gap-x-3 bg-hero bg-cover">
      <section
        className="w-1/3 h-screen flex flex-col justify-center"
        style={{
          backgroundColor: rgbaColor ? rgbaColor : "rgba(66, 94, 133, 0.4)",
        }}>
        <h2 className="text-2xl text-center font-bold font-body p-3 tracking-wider text-sky-950 ">
          Bienvenido llena tus datos y crea tú CV.
        </h2>
        <article className="h-[650px] overflow-hidden overflow-y-visible scrollbar">
          <PersonalDetails getImage={getImage} getInfoCv={getInfoCv} />

          <SkillsDetails {...skillsDetailProps} />

          <AboutMeDetails getInfoCv={getInfoCv} />

          <AcademyLevelDetails getInfoAcademy={getInfoAcademy} />

          <WorkExperienceDetails {...WorkExperienceDetailsProps} />

          <label htmlFor="color">
            Selecciona el color de tu agrado
            <input
              className="w-20 mx-3"
              type="color"
              id="color"
              value={color}
              onChange={handleChangeColor}
            />
          </label>
          <div className="w-full flex justify-center">
            <button
              className="w-40 h-10 bg-indigo-400 hover:bg-indigo-500 border-b-indigo-800 border-x-indigo-500 border-4 flex justify-center items-center text-white tracking-wide rounded m-4 active:scale-90 ease-out duration-100 ring-white active:ring-2"
              onClick={handleResetColor}>
              Restaurar color
            </button>
            <button
              className="w-40 h-10 bg-blue-400 hover:bg-blue-500 border-b-blue-800 border-x-blue-500 border-4 flex justify-center items-center text-white tracking-wide rounded m-4 active:scale-90 ease-out duration-100 ring-white active:ring-2"
              onClick={handlePDF}>
              🖨️ Imprimir
            </button>
          </div>
        </article>
      </section>

      <Cv
        color={color}
        rgbaColor={rgbaColor}
        componentPDF={componentPDF}
        selectedImage={selectedImage}
        inputExperienceWork={inputExperienceWork}
        listResponsabilitysWork={listResponsabilitysWork}
        listResponsabilitysWork2={listResponsabilitysWork2}
        informationCv={informationCv}
        listSkill={listSkill}
        listLanguages={listLanguages}
        infoAcademy={infoAcademy}
        isShowExperience={isShowExperience}
      />
    </main>
  );
};

export default Main;
