import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});
