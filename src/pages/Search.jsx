import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchVideos } from "../store/reducers/getSearchVideos";
import SearchCard from "../components/SearchCard";
import { clearSearch, clearVideos } from "../store/slices/youtubeSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Fetch videos from Redux store
  const videos = useSelector((state) => state.youtubeApp.searchResults);
  const searchTerm = useSelector((state) => state.youtubeApp.searchTerm);
  const nextPageToken=useSelector((state)=>state.youtubeApp.nextPageToken)
  // Initial data fetch on component mount
  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") {
      navigate("/");
      dispatch(clearSearch())
    } else {
      dispatch(getSearchVideos(false));
      
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-white ">
      {/* Content Section */}
      <div className="">
        {/* Infinite Scroll for Videos */}
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchVideos(true))}
            hasMore={!!nextPageToken}
            loader={<Spinner />}
            style={{ overflow: "visible" }} // Allow parent to handle scrolling
          >
            {/* Video Grid */}
            <div className="flex flex-col gap-2 p-4">
              {videos.map((item) => (
                <SearchCard data={item} key={item?.videoId} />
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
  );
};

export default Search;
