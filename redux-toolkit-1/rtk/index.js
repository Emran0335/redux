const store = require("./app/store");
// namely exports
// const {counterActions} = require("./features/counter/counterSlice");
const {dynamicCounterActions} = require("./features/dynamicCounter/dynamicCounterSlice")

// initial state
console.log(`Initial State: ${JSON.stringify(store.getState())}`)

// subscribe to state changes
store.subscribe(()=> {
    console.log(store.getState())
});

// counter dispatch actions
// store.dispatch(counterActions.increment())
// store.dispatch(counterActions.increment())
// store.dispatch(counterActions.increment())
// store.dispatch(counterActions.decrement())


// dynamicCounter dispatch actions
store.dispatch(dynamicCounterActions.increment(5))
store.dispatch(dynamicCounterActions.increment(5))
store.dispatch(dynamicCounterActions.increment(5))

store.dispatch(dynamicCounterActions.decrement(8))

// node rtk/index.js
