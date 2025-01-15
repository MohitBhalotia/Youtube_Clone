import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="w-full  flex flex-col gap-3">
      {/* Video Thumbnail and Duration */}
      <div className="relative">
        <Link to={`/watch/${data.videoId}`}>
        <img
          src={data.videoThumbnail || "placeholder-thumbnail.jpg"}
          alt={data.videoTitle || "Video thumbnail"}
          className="w-full h-40 sm:h-44 md:h-48 lg:h-56 object-cover rounded-xl"
          loading="lazy"
        />
        </Link>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-0.5 rounded">
          {data.videoDuration || "00:00"}
        </span>
      </div>

      {/* Video Info */}
      <div className="flex gap-3 items-start">
        {/* Channel Image */}
        <div className="flex-shrink-0">
          <a href="#">
            <img
              src={data.channelInfo?.image || "placeholder-channel.jpg"}
              alt={data.channelInfo?.name || "Channel image"}
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />
          </a>
        </div>

        {/* Textual Info */}
        <div className="flex flex-col flex-1">
          {/* Video Title */}
          <h3 className="text-sm font-semibold text-white line-clamp-2">
            <a href="#" className="hover:text-gray-300">
              {data.videoTitle || "Video Title"}
            </a>
          </h3>

          {/* Channel Name */}
          <div className="text-xs text-gray-400 mt-1">
            <a href="#" className="hover:text-white">
              {data.channelInfo?.name || "Channel Name"}
            </a>
          </div>

          {/* Views and Age */}
          <div className="text-xs text-gray-500 mt-1">
            <span className="after:content-['•'] after:mx-1">
              {data.videoViews || "0"} views
            </span>
            <span>{data.videoAge || "0 days"} ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
