import { NewList } from "../../../types";
import List from "../List";

interface Props {
  color: string;
  listSkill: NewList[];
  listLanguages: NewList[];
}

const PersonalSkills = ({ color, listSkill, listLanguages }: Props) => {
  return (
    <div className="mb-2">
      <h3
        style={{ backgroundColor: color }}
        className="w-full uppercase text-center py-1 mb-1 text-xl font-bold tracking-wider">
        Habilidades Personales
      </h3>

      <List color={color} nameList="Habilidades blandas" lists={listSkill} />
      <List color={color} nameList="Idiomas" lists={listLanguages} />
    </div>
  );
};

export default PersonalSkills;
