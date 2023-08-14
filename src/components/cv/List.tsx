import { NewList } from "../../types";

interface Props {
  color?: string;
  nameList?: string;
  lists: NewList[];
}

const List = ({ color, nameList, lists }: Props) => {
  return (
    <div className="mb-1">
      {nameList && (
        <h3
          className="w-full font-semibold pl-2"
          style={{ backgroundColor: color }}>
          {nameList}
        </h3>
      )}
      <ul className="w-full pl-4  marker:text-black list-disc text-sm font-semibold text-black">
        {lists?.map((item) => (
          <li key={item.id}>{item.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
