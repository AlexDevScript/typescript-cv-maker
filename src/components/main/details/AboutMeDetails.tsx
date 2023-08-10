import { FormEvents } from "../../../types";
import TemplateDetails from "./TemplateDetails";

interface Props {
  getInfoCv: (e: FormEvents["change"]) => void;
}

const AboutMeDetails = ({ getInfoCv }: Props) => {
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
