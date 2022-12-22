import React from "react";
import * as timeago from "timeago.js";
import TimeAgo from "timeago-react";
import koLocale from "timeago.js/lib/lang/ko";

timeago.register("ko", koLocale);

function Card({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} className="w-full rounded-xl" />
      <div>
        <p className="font-semibold my-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <TimeAgo className="text-sm opacity-80" datetime={publishedAt} locale="ko" />
        {/* <p className="text-sm opacity-80">{publishedAt}</p> */}
      </div>
    </li>
  );
}

export default Card;
