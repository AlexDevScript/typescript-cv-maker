import { Academy, InitialCv, NewList } from "../../../types";
import AcademySkill from "./AcademySkill";
import PersonalSkills from "./PersonalSkills";
import TechnicalSkills from "./TechnicalSkills";

interface Props {
  color: string;
  rgbaColor: string;
  informationCv: InitialCv;
  listSkill: NewList[];
  listLanguages: NewList[];
  infoAcademy: Academy;
}

const SectionSkills = ({
  color,
  rgbaColor,
  informationCv,
  listSkill,
  listLanguages,
  infoAcademy,
}: Props) => {
  return (
    <article className="w-52 text-white shadow-xl bg-white">
      <TechnicalSkills color={color} informationCv={informationCv} />
      <PersonalSkills
        color={color}
        listSkill={listSkill}
        listLanguages={listLanguages}
      />
      <AcademySkill
        color={color}
        rgbaColor={rgbaColor}
        infoAcademy={infoAcademy}
      />
    </article>
  );
};

export default SectionSkills;
