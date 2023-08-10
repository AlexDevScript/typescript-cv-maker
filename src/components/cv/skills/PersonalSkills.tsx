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
        className="w-full text-center py-1 mb-1 text-xl font-bold tracking-wider">
        HABILIDADES PERSONALES
      </h3>
      <List color={color} nameList="Habilidades blandas" lists={listSkill} />
      <List color={color} nameList="Idiomas" lists={listLanguages} />
    </>
  );
};

export default PersonalSkills;
