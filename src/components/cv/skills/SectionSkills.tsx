import { Academy, Color, ListsInfo } from "../../../types";
import AcademySkill from "./AcademySkill";
import PersonalSkills from "./PersonalSkills";
import TechnicalSkills from "./TechnicalSkills";

interface Props {
  changeColor: Color;
  infoAcademy: Academy;
  listsInfo: ListsInfo;
}

const SectionSkills = ({ changeColor, infoAcademy, listsInfo }: Props) => {
  const { listSkill, listLanguages, informationCv } = listsInfo;
  const { color, rgbaColor, initialColorRgba } = changeColor;

  return (
    <article className="w-52  text-white shadow-xl bg-white">
      <TechnicalSkills color={color} informationCv={informationCv} />

      <PersonalSkills
        color={color}
        listSkill={listSkill}
        listLanguages={listLanguages}
      />

      <AcademySkill
        color={color}
        rgbaColor={rgbaColor}
        initialColorRgba={initialColorRgba}
        infoAcademy={infoAcademy}
      />
    </article>
  );
};

export default SectionSkills;
