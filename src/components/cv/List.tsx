import { NewList } from "../../types";

interface Props {
  color?: string;
  nameList?: string;
  lists: NewList[];
}

const List = ({ color, nameList, lists }: Props) => {
  return (
    <div className="w-full mb-1">
      {nameList && (
        <h3 style={{ backgroundColor: color }} className="w-full font-semibold">
          {nameList}
        </h3>
      )}
      <ul className="w-full pl-5  m-auto marker:text-black list-disc text-sm font-semibold  text-black">
        {lists?.map((item) => (
          <li key={item.id}>{item.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
