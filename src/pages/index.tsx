import Box from "@/components/Box";
import Header from "@/components/Header";
import { ListProps } from "@/config/models";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const initialLists: ListProps[] = [
  {
    label: "Todo",
    id: "todo",
  },
  {
    label: "Doing",
    id: "doing",
  },
  {
    label: "Done",
    id: "done",
  },
];

export default function Home() {
  const [lists, setLists] = useState(initialLists);

  return (
    <div className={clsx(inter.className, "")}>
      <Header />

      <main className="px-8 py-10 flex gap-x-3">
        {lists.map((list, i) => (
          <Box key={i} {...list} />
        ))}
      </main>
    </div>
  );
}
