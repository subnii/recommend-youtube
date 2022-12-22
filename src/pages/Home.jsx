import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { useParams } from "react-router-dom";
import { fakeSearch, searchYoutube } from "../api/youtubeApi";
import Card from "../components/Card";

function Home() {
  // const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videoList,
  } = useQuery(
    ["videoList"],
    () => {
      console.log(fakeSearch());
      return fakeSearch();
    },
    { staleTime: 1000 * 60 * 1 },
  );

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {isLoading && <p>로딩중....</p>}
      {error && <p>문제가 발생했습니다.</p>}
      {videoList && (
        <>
          <p className="text-xl font-semibold mb-2">인기 급상승</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 gap-y-5">
            {videoList.map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Home;
