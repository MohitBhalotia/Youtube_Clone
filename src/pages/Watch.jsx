import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideo } from "../store/reducers/getRecommendedVideo";
import Spinner from "../components/Spinner";
import RecommendedVideoCard from "../components/RecommendedVideoCard"; // Component to render recommended videos

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPlaying = useSelector(
    (state) => state.youtubeApp?.currentPlaying
  );
  const recommendedVideos = useSelector(
    (state) => state.youtubeApp?.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideo(id));
    }
  }, [currentPlaying, id, dispatch]);

  if (!currentPlaying) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0F0F0F] text-white">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#0F0F0F] text-white">
      {/* Video Section */}
      <div className="flex-1 lg:w-2/3 p-4">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          frameBorder="0"
          width="100%"
          height="500px"
          allowFullScreen
          title="YouTube Player"
        ></iframe>
        <div className="mt-4">
          <h1 className="text-xl font-bold">{currentPlaying.videoTitle}</h1>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-400">
              {currentPlaying.videoViews} views • {currentPlaying.videoAge}
            </span>
            <span className="text-gray-400">
              {currentPlaying.viewLikes} likes
            </span>
          </div>
        </div>

        {/* Channel Info */}
        <div className="flex items-center mt-4">
          <img
            src={currentPlaying.channelInfo.image}
            alt={currentPlaying.channelInfo.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">
              {currentPlaying.channelInfo.name}
            </h2>
            <span className="text-sm text-gray-400">
              {currentPlaying.channelInfo.subscribers} subscribers
            </span>
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-4 text-gray-300">
          <p>{currentPlaying.videoDescription}</p>
        </div>
      </div>

      {/* Recommended Videos Section */}
      <div className="lg:w-1/3 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>
        <div className="space-y-4">
          {recommendedVideos?.length > 0 ? (
            recommendedVideos.map((video) => (
              <RecommendedVideoCard video={video} key={video.videoId} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Watch;
