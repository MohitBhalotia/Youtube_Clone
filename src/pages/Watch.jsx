import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideo } from "../store/reducers/getRecommendedVideo";
import Spinner from "../components/Spinner";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import RecommendedVideoCard from "../components/RecommendedVideoCard";

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
    <div className="flex flex-col lg:flex-row bg-[#0F0F0F] text-[#F1F1F1]">
      {/* Video Section */}
      <div className="flex-1 lg:w-3/4 p-4">
        <iframe
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          frameBorder="0"
          width="100%"
          height="650px"
          allowFullScreen
          title="YouTube Player"
        ></iframe>

        {/* Video Details */}
        <div className="mt-4">
          <h1 className="text-xl font-bold">{currentPlaying.videoTitle}</h1>
        </div>

        {/* Channel Info */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
          <div className="flex items-center mt-4">
            <img
              src={currentPlaying.channelInfo?.image}
              alt={currentPlaying.channelInfo?.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">
                {currentPlaying.channelInfo?.name}
              </h2>
              <span className="text-sm text-gray-400">
                {currentPlaying.channelInfo?.subscribers} subscribers
              </span>
            </div>
          </div>
           <div className="flex items-center">
           <button className="ml-auto bg-[#f1f1f1] text-black px-4 py-2  rounded-3xl  hover:bg-[#e9e7e7]">
              Subscribe
            </button>
           </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#282727] hover:bg-[#413F3E] px-4 py-2 rounded-3xl flex items-center gap-2">
            <BiLike className="text-2xl" /> {currentPlaying.viewLikes}
            <p className="border-gray-600 pl-2 border-l-2"><BiDislike className="text-2xl" /></p>
            </button>
           
            <button className="bg-[#282727] hover:bg-[#413F3E] px-4 py-2 rounded-3xl flex items-center gap-2">
            <PiShareFat className="text-2xl"/>Share
            </button>
            <button className="bg-[#282727] hover:bg-[#413F3E] px-4 py-2 rounded-3xl flex items-center gap-2">
            <HiDotsHorizontal className="text-2xl"/>
            </button>
          </div>
        </div>

        {/* Video Description */}
        <div className="flex flex-col rounded-xl p-4 mt-4 bg-[#272727] text-[#F1F1F1]">
          <span>
            {currentPlaying.videoViews} views • {currentPlaying.videoAge}
          </span>
          <div className="mt-2 text-gray-300  pt-2">
          <p className="text-sm">{currentPlaying.videoDescription}</p>
          <a href="#" className="text-blue-400 hover:underline mt-2 block">
            Show more
          </a>
        </div>
        </div>
        
      </div>

      {/* Recommended Videos Section */}
      <div className="lg:w-1/4 p-4 overflow-y-auto border-l border-gray-600">
        <h2 className="text-lg font-bold mb-4">Up Next</h2>
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
