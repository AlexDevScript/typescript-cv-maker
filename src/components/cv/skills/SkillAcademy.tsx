interface Props {
  title: string;
  info: string;
  rgbaColor: string;
  initialColorRgba: string;
}

const SkillAcademy = ({ title, info, rgbaColor, initialColorRgba }: Props) => {
  return (
    <div className="text-black">
      <p
        className="w-full text-center font-bold"
        style={{
          background: rgbaColor ? rgbaColor : initialColorRgba,
        }}>
        {title}
      </p>
      <p className="text-center">{info}</p>
    </div>
  );
};

export default SkillAcademy;
