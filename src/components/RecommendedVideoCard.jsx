import React from "react";
import { Link } from "react-router-dom";

const RecommendedVideoCard = ({ video }) => {
  // console.log(video);
  
  return (
    <Link to={`/watch/${video.videoId}`} className="flex items-start space-x-4">
      <img
        src={video.videoThumbnail}
        alt={video.videoTitle}
        className="w-40 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{video.videoTitle}</h3>
        <p className="text-xs text-gray-400">{video.channelInfo.name}</p>
        <p className="text-xs text-gray-400">
          {video.videoViews} views • {video.videoAge}
        </p>
      </div>
    </Link>
  );
};

export default RecommendedVideoCard;
