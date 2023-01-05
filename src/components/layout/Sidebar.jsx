import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../api/youtubeApi";
import { useSidebarContext } from "../../context/sidebar";

function Sidebar() {
  const { curCategory, setCurCategory, isMobile } = useSidebarContext();
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: categoryList,
  } = useQuery(
    ["categoryList"],
    () => {
      return getCategory();
    },
    { refetchOnWindowFocus: false },
  );

  const clickHandler = (id) => {
    setCurCategory(id);
    navigate(`/categoryVideos/${id}`);
  };

  return (
    <aside
      className={
        isMobile
          ? "absolute top-[61px] left-0 bg-zinc-900 z-10 flex-none w-64 h-full overflow-y-auto border-zinc-600 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-thumb-rounded scrollbar-track-zinc-900"
          : "flex-none w-64 h-full overflow-y-auto border-zinc-600 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-thumb-rounded scrollbar-track-zinc-900"
      }
    >
      {isLoading && <p>로딩중....</p>}
      {error && <p>문제가 발생했습니다.</p>}
      {categoryList && (
        <ul className="text-md p-3">
          {categoryList.map((category) => (
            <li
              key={category.id}
              className={
                curCategory === category.id
                  ? "p-2 cursor-pointer bg-zinc-700 rounded-lg hover:bg-zinc-600 hover:rounded-lg"
                  : "p-2 cursor-pointer hover:bg-zinc-600 hover:rounded-lg"
              }
              onClick={clickHandler.bind(null, category.id)}
            >
              {category.snippet.title}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;
