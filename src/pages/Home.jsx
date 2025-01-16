import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos} from "../store/reducers/getHomeVideos";
import { clearVideos } from "../store/slices/youtubeSlice";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch videos from Redux store
  useEffect(() => {
    dispatch(clearVideos());
    dispatch(getHomeVideos(false));
  }, [dispatch]);
  const nextPageToken=useSelector((state)=>state.youtubeApp.nextPageToken)
  const videos = useSelector((state) => state.youtubeApp.videos);

  return (
    <div className="bg-[#0F0F0F] ">
      {/* Main Content Section */}
      <div className="">
        {/* Infinite Scroll for Videos */}
        {videos && videos.length > 0 ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomeVideos(true))}
            hasMore={!!nextPageToken}
            loader={<Spinner />}
            style={{ overflow: "visible" }}
            scrollThreshold={0.8} //
          >
            {/* Video Grid */}
            <div className=" grid gap-y-6 gap-x-6 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {videos.map((item) => (
                <Card data={item} key={item?.videoId} />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          // Spinner for Loading State
          <div className="">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
