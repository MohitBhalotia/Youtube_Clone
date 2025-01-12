import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const initialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: [],
};

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
    const parsedData = parseData(items);
  }
);

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeVideos.pending)
      .addCase(getHomeVideos.rejected)
      .addCase(getHomeVideos.fulfilled);
  },
});

export default youtubeSlice.reducer;
