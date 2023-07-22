import { BsThreeDotsVertical } from "react-icons/bs";

const List = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center justify-between py-1.5 px-3 hover:bg-zinc-600 bg-zinc-700 duration-200 rounded cursor-pointer">
      <div>{text}</div>

      <button>
        <BsThreeDotsVertical />
      </button>
    </li>
  );
};

export default List;
