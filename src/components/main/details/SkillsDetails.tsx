import { FormEvents } from "../../../types";
import Input from "../../cv/Input";
import InputList from "../../cv/InputList";
import TemplateDetails from "./TemplateDetails";

interface Props {
  inputSoftSkill: string;
  inputLanguage: string;
  getInfoCv: (e: FormEvents["change"]) => void;
  getSkill: (e: FormEvents["change"], setState: string) => void;
  addSkill: (setState: string) => void;
  removeSkill: (setState: string) => void;
}

const SkillsDetails: React.FC<Props> = ({
  inputSoftSkill,
  inputLanguage,
  getInfoCv,
  getSkill,
  addSkill,
  removeSkill,
}) => {
  return (
    <TemplateDetails title="Habilidades Técnicas">
      <Input
        width="w-11/12"
        type="text"
        inputName="languages"
        placeholder="Lenguajes"
        onChange={getInfoCv}
      />
      <Input
        width="w-11/12"
        type="text"
        inputName="librarys"
        placeholder="Librerias"
        onChange={getInfoCv}
      />

      <Input
        width="w-11/12"
        type="text"
        inputName="tools"
        placeholder="Herramientas"
        onChange={getInfoCv}
      />

      <InputList
        input={inputSoftSkill}
        setState="soft"
        get={getSkill}
        handleAdd={addSkill}
        handleRemove={removeSkill}
        type="text"
        inputName="softSkills"
        placeholder="Habilidades Blandas"
      />
      <InputList
        input={inputLanguage}
        setState="language"
        get={getSkill}
        handleAdd={addSkill}
        handleRemove={removeSkill}
        type="text"
        inputName="foreignLanguages"
        placeholder="Idiomas"
      />
    </TemplateDetails>
  );
};

export default SkillsDetails;
