import React, { useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "./store/slices/youtubeSlice";

const App = () => {
  const dispatch=useDispatch();
  const videos=useSelector((state)=>state.youtubeApp.videos)

  useEffect(()=>{
    dispatch(getHomeVideos(false));
  },[dispatch])
  return (
    <div >
      <Home />
    </div>
  );
};

export default App;
