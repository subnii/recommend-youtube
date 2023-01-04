import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fakeHotVideo, fakeSearch, getVideo, searchVideo } from "../api/youtubeApi";
import Card from "../components/Card";

function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videoList,
  } = useQuery(
    ["videoList", keyword],
    () => {
      return keyword ? fakeSearch({ q: keyword }) : fakeHotVideo();
    },
    { staleTime: 1000 * 60 * 1 },
  );

  return (
    <div className="flex-1 w-full h-full p-4 overflow-y-auto border-zinc-600 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-thumb-rounded scrollbar-track-zinc-900">
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

export default Videos;
