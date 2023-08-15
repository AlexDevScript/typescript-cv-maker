import { NewList } from "../../../types";
import List from "../List";

interface Props {
  color: string;
  listSkill: NewList[];
  listLanguages: NewList[];
}

const PersonalSkills = ({ color, listSkill, listLanguages }: Props) => {
  return (
    <>
      <h3
        style={{ backgroundColor: color }}
        className="w-full uppercase text-center py-1 mb-1 text-xl font-bold tracking-wider">
        Habilidades Personales
      </h3>

      <List
        color={color}
        nameList="Habilidades blandas"
        capitalize={true}
        lists={listSkill}
      />
      <List
        color={color}
        nameList="Idiomas"
        capitalize={true}
        lists={listLanguages}
      />
    </>
  );
};

export default PersonalSkills;
