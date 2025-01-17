import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseData } from "../../utils/parseData";
import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomeVideos = createAsyncThunk(
  "youtubeApp/homeVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState },
    } = getState();

    // API call to fetch videos
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=''&key=${apiKey}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    const items = response?.data?.items;
    const parsedData = await parseData(items);

    return {
      parsedData, // Return only the new data
      nextPageToken: response?.data?.nextPageToken,
    };
  }
);

