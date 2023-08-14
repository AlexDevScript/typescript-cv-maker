interface Props {
  color: string;
  skill: string;
  nameSkill: string;
  capitalize?: boolean;
}

const Skill = ({ color, nameSkill, skill, capitalize = false }: Props) => {
  const CAPITALIZE = capitalize && "capitalize";
  return (
    <>
      <h3 className="tracking-wider pl-2" style={{ backgroundColor: color }}>
        {nameSkill}
      </h3>
      <p
        className={`h-auto break-words overflow-hidden p-2 ${CAPITALIZE} mb-2 font-semibold text-sm  text-black `}>
        {skill}
      </p>
    </>
  );
};

export default Skill;
