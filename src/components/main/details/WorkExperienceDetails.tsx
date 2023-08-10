import { FormEvents } from "../../../types";
import Input from "../../cv/Input";
import InputList from "../../cv/InputList";
import TemplateDetails from "./TemplateDetails";

interface Props {
  getResponsibility: (e: FormEvents["change"], setState: string) => void;
  getExperience: (e: FormEvents["change"]) => void;
  handleAddResponsability: (setState: string) => void;
  handleRemoveResponsibility: (setState: string) => void;
  inputResponsabilityWork: string;
  inputResponsabilityWork2: string;
  handleToggle: () => void;
  isShowExperience: boolean;
}

const WorkExperienceDetails = ({
  getResponsibility,
  getExperience,
  handleAddResponsability,
  inputResponsabilityWork,
  inputResponsabilityWork2,
  handleRemoveResponsibility,
  handleToggle,
  isShowExperience,
}: Props) => {
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
        handleAdd={handleAddResponsability}
        handleRemove={handleRemoveResponsibility}
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
          handleAdd={handleAddResponsability}
          handleRemove={handleRemoveResponsibility}
          type="text"
          inputName="foreignLanguages"
          placeholder="Responsabilidades"
        />
      </div>
    </TemplateDetails>
  );
};

export default WorkExperienceDetails;
