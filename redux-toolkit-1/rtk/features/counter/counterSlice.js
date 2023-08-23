const createSlice = require("@reduxjs/toolkit").createSlice;

// initialSate
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    // actions names
    reducers: {
        // actions functions
        increment: (state, action)=> {
            state.count++;
        },
        decrement: (state, action)=> {
            state.count--;
        }
    }
})
// this reducer is not the reducers(actions) of the return object of the createSlice. Rather it is the original reducer given by the RTK. Everything is given init by RTK.


// default export
module.exports = counterSlice.reducer;
// namely export
module.exports.counterActions = counterSlice.actions;

