interface Props {
  title: string;
  info: string;
  rgbaColor: string;
}

const SkillAcademy = ({ title, info, rgbaColor }: Props) => {
  return (
    <div className="text-center text-black">
      <p className="font-bold">{title}</p>
      <p
        style={{
          backgroundColor: rgbaColor ? rgbaColor : "rgba(66, 94, 133, 0.4)",
        }}>
        {info}
      </p>
    </div>
  );
};

export default SkillAcademy;
