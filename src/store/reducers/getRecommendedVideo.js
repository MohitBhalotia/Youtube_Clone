import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseRecommendedData } from "../../utils/parseRecommendedData";

const apiKey = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
  "youtubeApp/recommendedVideos",
  async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=''&key=${apiKey}&part=snippet&type=video`
    );
    const items = response?.data?.items;
    // console.log(items);

    const parsedData = await parseRecommendedData(items);

    return { parsedData };
  }
);
