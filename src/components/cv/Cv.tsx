import SectionInformation from "./information-personal/SectionInformation";
import SectionSkills from "./skills/SectionSkills";
import { Academy, InitialCv, ExperienceWork, NewList } from "../../types";

interface Props {
  color: string;
  rgbaColor: string;
  componentPDF: React.LegacyRef<HTMLElement> | null;
  selectedImage: string | null;
  inputExperienceWork: ExperienceWork;
  listResponsabilitysWork: NewList[];
  listResponsabilitysWork2: NewList[];
  informationCv: InitialCv;
  listSkill: NewList[];
  listLanguages: NewList[];
  infoAcademy: Academy;
  isShowExperience: boolean;
}

const Cv = ({
  color,
  rgbaColor,
  componentPDF,
  selectedImage,
  inputExperienceWork,
  listResponsabilitysWork,
  listResponsabilitysWork2,
  informationCv,
  listSkill,
  listLanguages,
  infoAcademy,
  isShowExperience,
}: Props) => {
  return (
    <section ref={componentPDF} className="w-[98%] mx-auto mt-5 font-body">
      <div
        style={{ backgroundColor: color }}
        className="w-11/12 h-8  flex justify-center items-center mb-5 mx-auto">
        <h1
          className="w-3/4 text-3xl text-center font-bold py-2 px-5 tracking-widest text-white"
          style={{
            backgroundColor: rgbaColor ? rgbaColor : "rgba(66, 94, 133, 0.4)",
          }}>
          CURRICULUM VITAE
        </h1>
      </div>

      <div className="flex gap-2 ">
        <SectionSkills
          color={color}
          rgbaColor={rgbaColor}
          informationCv={informationCv}
          listSkill={listSkill}
          listLanguages={listLanguages}
          infoAcademy={infoAcademy}
        />
        <SectionInformation
          color={color}
          selectedImage={selectedImage}
          inputExperienceWork={inputExperienceWork}
          listResponsabilitysWork={listResponsabilitysWork}
          listResponsabilitysWork2={listResponsabilitysWork2}
          informationCv={informationCv}
          isShowExperience={isShowExperience}
        />
      </div>
    </section>
  );
};

export default Cv;
