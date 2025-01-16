import { createSlice } from "@reduxjs/toolkit";
import { getHomeVideos } from "../reducers/getHomeVideos";
import { getSearchVideos } from "../reducers/getSearchVideos";
import { getRecommendedVideo } from "../reducers/getRecommendedVideo";
import { getVideoDetails } from "../reducers/getVideoDetails";
// import {getVide}

const initialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: [],
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomeVideos.fulfilled, (state, action) => {
        if (action.payload && action.payload.parsedData) {
          const videoMap = new Map();

          // Add existing videos to the Map
          state.videos.forEach((video) => videoMap.set(video.videoId, video));

          // Add new videos to the Map (overwrites duplicates if any)
          action.payload.parsedData.forEach((video) =>
            videoMap.set(video.videoId, video)
          );

          // Convert the Map back to an array
          state.videos = Array.from(videoMap.values());
          state.nextPageToken = action.payload.nextPageToken; // Update the token
        }
      })
      .addCase(getSearchVideos.fulfilled, (state, action) => {
        if (action.payload && action.payload.parsedData) {
          state.searchResults = [
            ...state.searchResults,
            ...action.payload.parsedData,
          ]; // Append videos
          state.nextPageToken = action.payload.nextPageToken; // Update the token
        }
      })

      .addCase(getRecommendedVideo.fulfilled, (state, action) => {
        if (action.payload && action.payload.parsedData) {
          state.recommendedVideo = action.payload.parsedData;
        }
      })
      .addCase(getVideoDetails.fulfilled, (state, action) => {
        if (action.payload && action.payload.parsedData) {
          state.currentPlaying = action.payload.parsedData;
        }
      });
  },
});
export const { clearVideos, changeSearchTerm, clearSearch } =
  youtubeSlice.actions;
export default youtubeSlice.reducer;
