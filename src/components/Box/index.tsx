import AddToDo from "@/components/AddToDo";
import List from "@/components/List";
import { ListProps } from "@/config/models";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Box = ({ id, label }: ListProps) => {
  const [isAddToDo, setIsAddToDo] = useState(false);
  const [data, setData] = useState<string[]>([]);

  console.log(id, data);

  const handleAdd = (val: string) => {
    setData((prev) => [...prev, val]);
    setIsAddToDo(false);
  };

  return (
    <div className="px-4 py-3 rounded-md bg-zinc-800 w-[350px] text-zinc-300 h-fit">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">{label}</h3>
        <button className="p-2 rounded hover:bg-zinc-700 duration-200">
          <BsThreeDots />
        </button>
      </header>

      <main className="mt-3">
        <ul className="space-y-2">
          {data.map((text, i) => (
            <List key={i} text={text} />
          ))}
        </ul>
        {isAddToDo && (
          <AddToDo onClose={() => setIsAddToDo(false)} onAdd={handleAdd} />
        )}
      </main>

      <footer className="mt-2">
        {!isAddToDo && (
          <button
            onClick={() => setIsAddToDo(true)}
            className="flex items-center gap-x-2 w-full hover:bg-zinc-700 duration-200 rounded py-1.5 justify-center"
          >
            <AiOutlinePlus />
            <span>Add a card</span>
          </button>
        )}
      </footer>
    </div>
  );
};

export default Box;
