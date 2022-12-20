import React from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <header className="w-full flex p-3 text-xl border-b border-zinc-600">
      <div className="w-full flex items-center">
        <AiOutlineMenu className="text-2xl text-brand mr-4" />
        <BsYoutube className="text-2xl text-brand" />
        <h1 className="font-bold ml-2 text-xl">R-Tube</h1>
      </div>

      <div className="w-full flex justify-end">
        <input type="text" className="w-6/12 p-1 outline-none rounded-l-lg bg-black text-gray-50" placeholder="검색" />
        <button className="bg-zinc-600 px-4 rounded-r-lg">
          <BsSearch />
        </button>
      </div>
    </header>
  );
}

export default Header;
