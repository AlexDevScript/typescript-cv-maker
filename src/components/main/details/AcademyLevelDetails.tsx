import Input from "../../cv/Input";
import { FormEvents } from "../../../types";
import TemplateDetails from "./TemplateDetails";

interface Props {
  getInfoAcademy: (e: FormEvents["change"]) => void;
}

const AcademyLevelDetails = ({ getInfoAcademy }: Props) => {
  return (
    <TemplateDetails title="Información Académica">
      <Input
        width="w-11/12"
        type="text"
        inputName="level"
        placeholder="Nivel Académico"
        onChange={getInfoAcademy}
      />

      <Input
        width="w-11/12"
        type="text"
        inputName="profession"
        placeholder="Profesión"
        onChange={getInfoAcademy}
      />

      <Input
        width="w-11/12"
        type="text"
        inputName="academy"
        placeholder="Nombre de la Institución"
        onChange={getInfoAcademy}
      />

      <Input
        width="w-11/12"
        type="text"
        inputName="period"
        placeholder="Periodo"
        onChange={getInfoAcademy}
      />
      <Input
        width="w-11/12"
        type="text"
        inputName="certificate"
        placeholder="Documento Recibido"
        onChange={getInfoAcademy}
      />
    </TemplateDetails>
  );
};

export default AcademyLevelDetails;
