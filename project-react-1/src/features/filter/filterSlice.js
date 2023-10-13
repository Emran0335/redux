import { createSlice } from "@reduxjs/toolkit";

// initialState will be
const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  // convention is to name it as the name of the folder
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {searched,tagRemoved,tagSelected} = filterSlice.actions