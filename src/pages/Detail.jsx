import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { getChannels, searchVideo } from "../api/youtubeApi";
import Card from "../components/Card";
import { getFixCount } from "../util/number";

function ChannelInfo({ id, name }) {
  const { data: channelInfo } = useQuery(["channel", id], () => getChannels(id), { staleTime: 1000 * 60 * 5 });
  return (
    <div className="flex my-2 mb-5 items-center">
      {channelInfo && (
        <>
          <img className="w-10 h-10 rounded-full" src={channelInfo.snippet.thumbnails.default.url} alt={name} />
          <div className="ml-2">
            <p className="text-md font-medium">{name}</p>
            <p className="text-xs opacity-80">{getFixCount(channelInfo.statistics.subscriberCount)}명</p>
          </div>
        </>
      )}
    </div>
  );
}

function RelatedVideos({ id }) {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => searchVideo({ relatedToVideoId: id, type: "video" }), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <Card key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}

function Detail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <div className="flex-1 w-full h-full p-4 overflow-y-auto border-zinc-600 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-thumb-rounded scrollbar-track-zinc-900">
      <section className="flex flex-col gap-2 lg:flex-row">
        <article className="basis-4/6">
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
          />
          <div className="pt-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />

            <div className="bg-white/10 p-3 text-sm rounded-lg text-[#f1f1f1]">
              {video.statistics && (
                <p className="mb-2">조회수 {Number(video.statistics.viewCount).toLocaleString()}회</p>
              )}
              <p className="whitespace-pre-wrap">{description}</p>
            </div>
          </div>
        </article>
        <section className="basis-2/6">
          <RelatedVideos id={video.id} />
        </section>
      </section>
    </div>
  );
}

export default Detail;
