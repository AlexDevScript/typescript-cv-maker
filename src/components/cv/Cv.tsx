import SectionInformation from "./information-personal/SectionInformation";
import SectionSkills from "./skills/SectionSkills";
import { Academy, Color, ListsInfo, ListsWork } from "../../types";

interface Props {
  changeColor: Color;
  componentPDF: React.LegacyRef<HTMLElement> | null;
  listsInfo: ListsInfo;
  listsWork: ListsWork;
  infoAcademy: Academy;
  isShowExperience: boolean;
}

const Cv = ({
  changeColor,
  componentPDF,
  listsWork,
  listsInfo,
  infoAcademy,
  isShowExperience,
}: Props) => {
  const { selectedImage, informationCv } = listsInfo;
  const { color, rgbaColor, initialColorRgba } = changeColor;

  return (
    <section
      ref={componentPDF}
      className="w-[98%] m-auto mt-5 font-body bg-hero bg-cover">
      <div
        style={{ backgroundColor: color }}
        className="w-3/4 h-8 mx-auto mb-5 flex justify-center items-center">
        <h1
          className="w-full text-3xl text-center font-bold py-2 px-5 text-white tracking-widest"
          style={{
            background: rgbaColor ? rgbaColor : initialColorRgba,
          }}>
          CURRICULUM VITAE
        </h1>
      </div>

      <div className="flex gap-2">
        <SectionSkills
          changeColor={changeColor}
          infoAcademy={infoAcademy}
          listsInfo={listsInfo}
        />
        <SectionInformation
          changeColor={changeColor}
          selectedImage={selectedImage}
          listsWork={listsWork}
          informationCv={informationCv}
          isShowExperience={isShowExperience}
        />
      </div>
    </section>
  );
};

export default Cv;
