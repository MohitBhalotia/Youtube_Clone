import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "../store/reducers/getHomeVideos";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch videos from Redux store
  const videos = useSelector((state) => state.youtubeApp.videos);

  // Initial data fetch on component mount
  useEffect(() => {
    dispatch(getHomeVideos(false));
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col bg-[#0F0F0F] text-white overflow-hidden">
      {/* Navbar */}
      <div className="h-[7.5vh]">
        <Navbar />
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex h-[92.5vh] overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Section */}
        <div className="flex-1 overflow-y-scroll">
          {/* Infinite Scroll for Videos */}
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomeVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              style={{ overflow: "visible" }} // Allow parent to handle scrolling
            >
              {/* Video Grid */}
              <div className="grid gap-y-8 gap-x-6 grid-cols-5 p-4">
                {videos.map((item) => (
                  <Card data={item} key={item?.videoId } />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            // Spinner for Loading State
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
