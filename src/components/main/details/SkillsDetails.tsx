import { FormEvents } from "../../../types";
import Input from "../../cv/Input";
import InputList from "../../cv/InputList";
import TemplateDetails from "./TemplateDetails";

interface FunctionSkills {
  getInfoCv: (e: FormEvents["change"]) => void;
  getSkill: (e: FormEvents["change"], setState: string) => void;
  addSkill: (setState: string) => void;
  removeSkill: (setState: string) => void;
}

interface GetInputs {
  inputSoftSkill: string;
  inputLanguage: string;
}

interface Props {
  getInputs: GetInputs;
  getFunctionSkills: FunctionSkills;
}

const SkillsDetails = ({ getInputs, getFunctionSkills }: Props) => {
  const { inputLanguage, inputSoftSkill } = getInputs;
  const { getInfoCv, getSkill, addSkill, removeSkill } = getFunctionSkills;
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
        onEventAdd={addSkill}
        onEventRemove={removeSkill}
        type="text"
        inputName="softSkills"
        placeholder="Habilidades Blandas"
      />

      <InputList
        input={inputLanguage}
        setState="language"
        get={getSkill}
        onEventAdd={addSkill}
        onEventRemove={removeSkill}
        type="text"
        inputName="foreignLanguages"
        placeholder="Idiomas"
      />
    </TemplateDetails>
  );
};

export default SkillsDetails;
