import { Academy } from "../../../types";
import SkillAcademy from "./SkillAcademy";

interface Props {
  color: string;
  rgbaColor: string;
  infoAcademy: Academy;
}

const AcademySkill = ({ color, rgbaColor, infoAcademy }: Props) => {
  const { level, academy, period, certificate, profession } = infoAcademy;
  return (
    <>
      <h3
        style={{ backgroundColor: color }}
        className="w-full text-center p-1 text-xl font-bold tracking-wider">
        INFORMACIÓN ACADÉMICA
      </h3>

      <SkillAcademy
        title="Nivel Académico"
        info={level}
        rgbaColor={rgbaColor}
      />

      <SkillAcademy
        title="Carrera - Profesión"
        info={profession}
        rgbaColor={rgbaColor}
      />

      <SkillAcademy title="Institucion" info={academy} rgbaColor={rgbaColor} />

      <SkillAcademy title="Periodo" info={period} rgbaColor={rgbaColor} />

      <SkillAcademy
        title="Documento Recibido"
        info={certificate}
        rgbaColor={rgbaColor}
      />
    </>
  );
};

export default AcademySkill;
