interface Props {
  title: string;
  info: string;
  rgbaColor: string;
  color?: string;
  initialColorRgba: string;
}

const SkillAcademy = ({
  title,
  info,
  color,
  rgbaColor,
  initialColorRgba,
}: Props) => {
  return (
    <div
      style={{
        color: color,
      }}>
      <p
        className="w-full text-center font-bold"
        style={{
          background: rgbaColor ? rgbaColor : initialColorRgba,
        }}>
        {title}
      </p>
      <p className="text-center text-black font-semibold text-sm">{info}</p>
    </div>
  );
};

export default SkillAcademy;
