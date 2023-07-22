import Link from "next/link";

const Header = () => {
  return (
    <header className="px-10 py-5 bg-slate-100">
      <div className="flex items-center justify-between ">
        <Link href={"/"}>
          <div className="text-2xl font-bold">Todo</div>
        </Link>

        <button className="h-10 aspect-square rounded-full bg-zinc-800">
          {" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
