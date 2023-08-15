import { Academy } from "../../../types";
import SkillAcademy from "./SkillAcademy";

interface Props {
  color: string;
  rgbaColor: string;
  initialColorRgba: string;
  infoAcademy: Academy;
}

const AcademySkill = ({
  color,
  infoAcademy,
  rgbaColor,
  initialColorRgba,
}: Props) => {
  const { level, academy, period, certificate, profession } = infoAcademy;
  return (
    <>
      <h3
        style={{ backgroundColor: color }}
        className="w-full uppercase py-1 text-center text-xl font-bold tracking-wider">
        Información Académica
      </h3>

      <SkillAcademy
        title="Nivel Académico"
        info={level}
        color={color}
        rgbaColor={rgbaColor}
        initialColorRgba={initialColorRgba}
      />

      <SkillAcademy
        title="Carrera - Profesión"
        info={profession}
        color={color}
        rgbaColor={rgbaColor}
        initialColorRgba={initialColorRgba}
      />

      <SkillAcademy
        title="Institución"
        info={academy}
        color={color}
        rgbaColor={rgbaColor}
        initialColorRgba={initialColorRgba}
      />

      <SkillAcademy
        title="Periodo"
        info={period}
        color={color}
        rgbaColor={rgbaColor}
        initialColorRgba={initialColorRgba}
      />

      <SkillAcademy
        title="Documento Recibido"
        info={certificate}
        color={color}
        rgbaColor={rgbaColor}
        initialColorRgba={initialColorRgba}
      />
    </>
  );
};

export default AcademySkill;
