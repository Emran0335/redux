const { counterActions } = require("../counter/counterSlice");
const createSlice = require("@reduxjs/toolkit").createSlice;

// initialSate
const initialState = {
  count: 5,
};
const dynamicCounterSlice = createSlice({
  // name will help to make dynamicCounter/icrement
  name: "dynamicCounter",
  initialState: initialState,
  // actions names
  reducers: {
    // actions functions
    // type: dynamicCounter/increment
    // these are the only reducers of dynamicCounterSlice works for only its purposes. They are using their own unique indentifier.
    increment: (state, action) => {
      state.count += action.payload;
    },
    // type: dynamicCounter/decrement
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  // If we want to use other reducer, then we need to use extraRducers. So it is going to listen the counter/increment reducer.
  /*
  extraReducers: {
    // it is called extraRducers middleware as we know rtk has its default middlewares.
    ["counter/increment"]: (state, action) => {
      state.count += 1;
    },
  },
  */
  //   recommended way.
  extraReducers: (builder) => {
    builder.addCase(counterActions.increment, (state, action) => {
      state.count += 1;
    });
  },
});
// this reducer is not the reducers(actions) of the return object of the createSlice. Rather it is the original reducer given by the RTK. Everything is given init by RTK.

// default export
module.exports = dynamicCounterSlice.reducer;
// namely export
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
