import { InitialCv } from "../../../types";
import Skill from "./Skill";

interface Props {
  color: string;
  informationCv: InitialCv;
}

const TechnicalSkills = ({ color, informationCv }: Props) => {
  const { languages, librarys, tools } = informationCv.skills;

  return (
    <>
      <h3
        style={{ backgroundColor: color }}
        className="w-full uppercase py-1 mb-1 text-center text-xl font-bold tracking-wider">
        Habilidades Técnicas
      </h3>
      <Skill
        color={color}
        nameSkill="Lenguajes"
        skill={languages}
        capitalize={true}
      />
      <Skill
        color={color}
        nameSkill="Librerias"
        skill={librarys}
        capitalize={true}
      />
      <Skill
        color={color}
        nameSkill="Herramientas"
        skill={tools}
        capitalize={true}
      />
    </>
  );
};

export default TechnicalSkills;
