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
    <aside className="flex-none w-64 border-r-1">
      {categoryList && (
        <ul className="text-lg p-2">
          {categoryList.map((category) => (
            <li key={category.id}>{category.snippet.title}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;
