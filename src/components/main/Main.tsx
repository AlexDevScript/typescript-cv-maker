import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import Cv from "../cv/Cv";
import PersonalDetails from "./details/PersonalDetails";
import SkillsDetails from "./details/SkillsDetails";
import useInformation from "../../hooks/useInformation";
import AboutMeDetails from "./details/AboutMeDetails";
import WorkExperienceDetails from "./details/WorkExperienceDetails";
import useWorkExperience from "../../hooks/useWorkExperience";
import AcademicLevelDetails from "./details/AcademyLevelDetails";
import useAcademy from "../../hooks/useAcademy";
import useColor from "../../hooks/useColor";
import ColorPicker from "./ColorPicker";
import Button from "./Button";

const Main = () => {
  const [isShowExperience, setIsShowExperience] = useState<boolean>(true);
  const handleToggle = () => {
    setIsShowExperience(!isShowExperience);
  };

  const { getInputs, getFunctionSkills, listsInfo } = useInformation();

  const { getFunctionWork, getInputsWorkResponsability, listsWork, getInfo } =
    useWorkExperience();

  const { getInfoAcademy, infoAcademy } = useAcademy();

  const { changeColor } = useColor();

  const componentPDF = useRef<HTMLDivElement>(null);

  const handlePDF = useReactToPrint({
    content: () => componentPDF.current,
  });

  return (
    <main className="w-11/12 min-h-screen m-auto flex gap-x-3 bg-hero bg-contain">
      <section
        style={{
          background: changeColor.rgbaColor
            ? changeColor.rgbaColor
            : changeColor.initialColorRgba,
        }}
        className="w-1/3 h-[46rem] m-auto py-5 overflow-hidden overflow-y-visible scrollbar">
        <h2 className="text-xl font-bold font-body p-2 text-center tracking-wider text-black">
          Bienvenido llena los campos y crea tu CV.
        </h2>
        <PersonalDetails getFunctionSkills={getFunctionSkills} />

        <SkillsDetails
          getInputs={getInputs}
          getFunctionSkills={getFunctionSkills}
        />

        <AboutMeDetails getFunctionSkills={getFunctionSkills} />

        <AcademicLevelDetails getInfoAcademy={getInfoAcademy} />

        <WorkExperienceDetails
          getInfo={getInfo}
          getFunctionWork={getFunctionWork}
          getInputsWorkResponsability={getInputsWorkResponsability}
          handleToggle={handleToggle}
          isShowExperience={isShowExperience}
        />

        <ColorPicker changeColor={changeColor} />

        <Button color="indigo" onClick={handlePDF}>
          🖨️ Imprimir
        </Button>
      </section>
      <Cv
        changeColor={changeColor}
        componentPDF={componentPDF}
        listsWork={listsWork}
        listsInfo={listsInfo}
        infoAcademy={infoAcademy}
        isShowExperience={isShowExperience}
      />
    </main>
  );
};

export default Main;
