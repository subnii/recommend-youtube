import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fakeCategory } from "../../api/youtubeApi";

function Sidebar() {
  const {
    isLoading,
    error,
    data: categoryList,
  } = useQuery(
    ["categoryList"],
    () => {
      return fakeCategory();
    },
    { staleTime: 1000 * 60 * 1 },
  );

  return (
    <aside className="flex-none w-64 h-full overflow-y-auto border-zinc-600 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-thumb-rounded scrollbar-track-zinc-900">
      {categoryList && (
        <ul className="text-md p-3">
          {categoryList.map((category) => (
            <li key={category.id} className="p-2">
              {category.snippet.title}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;
