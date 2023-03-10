import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebar";

function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const { toggleSidebar, setCurCategory } = useSidebarContext();

  const searchHandler = () => {
    setCurCategory(undefined);
    navigate(`/search/${text}`);
  };

  const clickHandler = () => {
    setCurCategory(undefined);
    navigate("/");
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="flex-none w-full flex p-3 text-xl border-b border-zinc-600">
      <div className="w-full flex items-center">
        <AiOutlineMenu className="text-2xl text-brand mr-4 cursor-pointer" onClick={toggleSidebar} />
        <button className="flex items-center" onClick={clickHandler}>
          <BsYoutube className="text-2xl text-brand" />
          <h1 className="font-bold ml-2 text-xl">R-Tube</h1>
        </button>
      </div>

      <div className="w-full flex justify-end">
        <input
          type="text"
          className="w-6/12 p-1 outline-none rounded-l-lg bg-black text-gray-50"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4 rounded-r-lg" onClick={searchHandler}>
          <BsSearch />
        </button>
      </div>
    </header>
  );
}

export default Header;
