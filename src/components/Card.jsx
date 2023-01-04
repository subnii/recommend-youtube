import React from "react";
import * as timeago from "timeago.js";
import TimeAgo from "timeago-react";
import koLocale from "timeago.js/lib/lang/ko";
import { getFixCount } from "../util/number";
import { useNavigate } from "react-router-dom";

timeago.register("ko", koLocale);

function Card({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/detail/${video.id}`, { state: { video } });
  };

  return (
    <li className={type === "list" ? "flex gap-1 mb-2" : ""} onClick={clickHandler}>
      <img
        className={type === "list" ? "w-60 mr-2 rounded-md" : "w-full rounded-xl"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        {video.statistics && (
          <span className="text-sm opacity-80">조회수 {getFixCount(video.statistics.viewCount)}회 &middot; </span>
        )}
        <TimeAgo className="text-sm opacity-80" datetime={publishedAt} locale="ko" />
      </div>
    </li>
  );
}

export default Card;
