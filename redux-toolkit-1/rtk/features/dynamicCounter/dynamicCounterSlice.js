const createSlice = require("@reduxjs/toolkit").createSlice;

// initialSate
const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState: initialState,
    // actions names
    reducers: {
        // actions functions
        increment: (state, action)=> {
            state.count += action.payload;
        },
        decrement: (state, action)=> {
            state.count -= action.payload;
        }
    }
})
// this reducer is not the reducers(actions) of the return object of the createSlice. Rather it is the original reducer given by the RTK. Everything is given init by RTK.


// default export
module.exports = dynamicCounterSlice.reducer;
// namely export
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;

