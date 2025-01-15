import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseData } from "../../utils/parseData";
import axios from "axios";
import { parseRecommendedData } from "../../utils/parseRecommendedData";

const apiKey = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
  "youtubeApp/recommendedVideos",
  async (videoId, { getState }) => {
    const {
      youtubeApp: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/activities?key=${apiKey}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=videoId=${videoId}`
    );
    const items = response?.data?.items;
    const parsedData = await parseRecommendedData(items);

    return { parsedData };
  }
);
