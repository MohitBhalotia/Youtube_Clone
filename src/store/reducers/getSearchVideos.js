import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseData } from "../../utils/parseData";
import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getSearchVideos = createAsyncThunk(
  "youtubeApp/searchVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos,searchTerm },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${searchTerm}&key=${apiKey}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const items = response?.data?.items;
    const parsedData = await parseData(items);
    // console.log(parsedData);

    return {
      parsedData,
      nextPageToken: response?.data?.nextPageToken,
    };
  }
);
