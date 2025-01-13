import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseData } from "../../utils/parseData";
import axios from "axios";
const apiKey = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomeVideos = createAsyncThunk(
  "youtubeApp/homeVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=''&key=${apiKey}&part=snippet&type=video`
    );
    const items = response?.data?.items;
    const parsedData =await  parseData(items);
    console.log(parsedData);

    return {
      parsedData: [...videos, parsedData],
      nextPageToken: nextPageTokenFromState,
    };
  }
);
