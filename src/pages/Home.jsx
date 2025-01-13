import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "../store/reducers/getHomeVideos";

const Home = () => {
  const dispatch = useDispatch();
  const videos=useSelector((state)=>state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomeVideos(false));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
