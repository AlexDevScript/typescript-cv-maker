import { FormEvents } from "../../../types";
import TemplateDetails from "./TemplateDetails";

interface FunctionSkills {
  getInfoCv: (e: FormEvents["change"]) => void;
}

interface Props {
  getFunctionSkills: FunctionSkills;
}

const AboutMeDetails = ({ getFunctionSkills }: Props) => {
  const { getInfoCv } = getFunctionSkills;
  return (
    <TemplateDetails title="Sobre mí">
      <textarea
        className="w-11/12 resize-none  text-black"
        name="aboutMe"
        placeholder="Descripción"
        rows={5}
        onChange={getInfoCv}></textarea>
    </TemplateDetails>
  );
};

export default AboutMeDetails;
