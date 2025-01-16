import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ data }) => {
  return (
    <div className="flex bg-[#0F0F0F] text-white p-4 rounded-lg gap-4 shadow-md">
      {/* Thumbnail Section */}
      <div className="relative flex-shrink-0">
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="w-60 h-40 md:w-60 md:h-48 lg:w-[500px] lg:h-[280px] rounded-lg object-cover"
          />
        </Link>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs md:text-sm px-1.5 py-0.5 rounded">
          {data.videoDuration}
        </span>
      </div>

      {/* Video Information Section */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-base md:text-xl font-semibold line-clamp-2">
          {data.videoTitle}
        </h3>

        {/* Views and Upload Time */}
        <div className="text-sm md:text-base text-gray-400 mt-2">
          <span className="mr-2">{data.videoViews} views</span>
          <span>{data.videoAge} ago</span>
        </div>

        {/* Channel Information */}
        <div className="flex items-center gap-3 mt-3">
          <img
            src={data.channelInfo?.image}
            alt="Channel Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full"
          />
          <span className="text-sm md:text-base font-medium">
            {data.channelInfo?.name}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base line-clamp-1 mt-3">
          {data.videoDescription}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
