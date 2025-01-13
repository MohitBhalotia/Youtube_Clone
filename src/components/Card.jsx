import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-70 flex flex-col gap-3">
      {/* Video Thumbnail and Duration */}
      <div className="relative">
        <img
          src={data.videoThumbnail || "placeholder-thumbnail.jpg"}
          alt={data.videoTitle || "Video thumbnail"}
          className="w-full h-44 object-cover rounded-lg"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
          {data.videoDuration || "00:00"}
        </span>
      </div>

      {/* Channel Image and Video Details */}
      <div className="flex gap-3">
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

        {/* Video Info */}
        <div className="flex flex-col">
          {/* Video Title */}
          <h3 className="text-sm font-medium text-white line-clamp-2">
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
          <div className="text-xs text-gray-400 mt-1">
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
