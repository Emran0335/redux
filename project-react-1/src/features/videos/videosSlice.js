// for fetching data
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

// initialState will be
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// let's create thunk. The convention of the name is followed the folder name.
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    // async parameter accepts only one type. so, we have to pass object here
    const videos = await getVideos(tags, search);
    return videos;
  }
);

const videoSlice = createSlice({
  // convention is to name it as the name of the folder
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      // builder chaining...
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
