import { FormEvents } from "../../../types";
import Input from "../../cv/Input";
import InputList from "../../cv/InputList";
import TemplateDetails from "./TemplateDetails";

interface InputsWorkResponsabilty {
  inputResponsabilityWork: string;
  inputResponsabilityWork2: string;
}

interface GetFunctionWork {
  addResponsability: (setState: string) => void;
  removeResponsibility: (setState: string) => void;
}

interface GetInfo {
  getResponsibility: (e: FormEvents["change"], setState: string) => void;
  getExperience: (e: FormEvents["change"]) => void;
}

interface Props {
  getFunctionWork: GetFunctionWork;
  getInputsWorkResponsability: InputsWorkResponsabilty;
  getInfo: GetInfo;
  handleToggle: () => void;
  isShowExperience: boolean;
}

const WorkExperienceDetails = ({
  getInfo,
  getFunctionWork,
  getInputsWorkResponsability,
  handleToggle,
  isShowExperience,
}: Props) => {
  const { inputResponsabilityWork, inputResponsabilityWork2 } =
    getInputsWorkResponsability;

  const { addResponsability, removeResponsibility } = getFunctionWork;
  const { getExperience, getResponsibility } = getInfo;

  const textButton = isShowExperience ? "Ocultar " : "Mostrar ";
  return (
    <TemplateDetails title="Experiencia Laboral">
      <Input
        width="w-11/12"
        type="text"
        inputName="company"
        placeholder="Nombre de la empresa"
        onChange={getExperience}
      />
      <Input
        width="w-11/12"
        type="text"
        inputName="period"
        placeholder="Periodo"
        onChange={getExperience}
      />
      <Input
        width="w-11/12"
        type="text"
        inputName="job"
        placeholder="Puesto"
        onChange={getExperience}
      />
      <InputList
        input={inputResponsabilityWork}
        setState="work"
        get={getResponsibility}
        onEventAdd={addResponsability}
        onEventRemove={removeResponsibility}
        type="text"
        inputName="foreignLanguages"
        placeholder="Responsabilidades"
      />

      <div className="w-full text-center mb-5">
        <button
          className="w-11/12 h-11  rounded-md text-indigo-950  bg-indigo-200"
          onClick={handleToggle}>
          {textButton} Segunda Experiencia Laboral
        </button>
      </div>

      <div className="flex justify-around flex-wrap gap-y-3">
        <Input
          width="w-11/12"
          type="text"
          inputName="company2"
          placeholder="Nombre de la empresa"
          onChange={getExperience}
        />
        <Input
          width="w-11/12"
          type="text"
          inputName="period2"
          placeholder="Periodo"
          onChange={getExperience}
        />
        <Input
          width="w-11/12"
          type="text"
          inputName="job2"
          placeholder="Puesto"
          onChange={getExperience}
        />
        <InputList
          input={inputResponsabilityWork2}
          setState="work2"
          get={getResponsibility}
          onEventAdd={addResponsability}
          onEventRemove={removeResponsibility}
          type="text"
          inputName="foreignLanguages"
          placeholder="Responsabilidades"
        />
      </div>
    </TemplateDetails>
  );
};

export default WorkExperienceDetails;
