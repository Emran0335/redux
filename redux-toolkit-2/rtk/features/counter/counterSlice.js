const createSlice = require("@reduxjs/toolkit").createSlice;

// initialSate
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  // name will be like 'counter/increment' or 'counter/decrement'
  name: "counter",
  initialState: initialState,
  // actions names
  reducers: {
    // actions functions
    // action type will be counter/increment
    increment: (state, action) => {
      state.count++;
    },
    // action type will be counter/decrement
    decrement: (state, action) => {
      state.count--;
    },
  },
});
// this reducer is not the reducers(actions) of the return object of the createSlice. Rather it is the original reducer given by the RTK. Everything is given init by RTK.

// default export
module.exports = counterSlice.reducer;
// namely export
module.exports.counterActions = counterSlice.actions;
