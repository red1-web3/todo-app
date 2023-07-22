import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddToDo = ({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (val: string) => void;
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="mt-2">
      <textarea
        name="addToDo"
        className="bg-zinc-500/40 w-full rounded resize-none p-3 outline-none"
        placeholder="Enter a title for this card..."
        rows={3}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      <div className="flex items-center gap-x-3">
        <button
          onClick={() => {
            if (!value) return;
            onAdd(value);
            setValue("");
          }}
          className="px-5 py-2 rounded bg-accent hover:bg-accent-bright duration-200 text-black"
        >
          Add card
        </button>
        <button
          onClick={() => {
            onClose();
            setValue("");
          }}
          className="text-2xl"
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
