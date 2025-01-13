import React, { useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "./store/reducers/getHomeVideos";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
