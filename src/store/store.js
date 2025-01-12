import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./slices/youtubeSlice";
const store = configureStore({
  reducer: {
    youtubeApp: youtubeReducer,
  },
});
export default store;
