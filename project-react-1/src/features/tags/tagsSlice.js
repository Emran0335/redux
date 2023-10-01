// for fetching data
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

// initialState will be
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// let's create thunk. The convention of the name is followed the folder name.
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

const tagsSlice = createSlice({
  // convention is to name it as the name of the folder
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      // builder chaining...
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
