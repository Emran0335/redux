const store = require("./store");
const { increment, decrement } = require("./counter/actions");


// subscribe to state changes
store.subscribe(()=> {
    console.log(store.getState())
});

// dispatch actions

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())

// node redux/index.js