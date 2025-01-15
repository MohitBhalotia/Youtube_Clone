import React from "react";
import { Link } from "react-router-dom";

const RecommendedVideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.videoId}`} className="flex items-start space-x-4">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-24 h-14 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{video.title}</h3>
        <p className="text-xs text-gray-400">{video.channel}</p>
        <p className="text-xs text-gray-400">
          {video.views} views • {video.publishedTime}
        </p>
      </div>
    </Link>
  );
};

export default RecommendedVideoCard;
