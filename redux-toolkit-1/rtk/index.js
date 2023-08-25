const store = require("./app/store");
// namely exports
const {counterActions} = require("./features/counter/counterSlice");
const {dynamicCounterActions} = require("./features/dynamicCounter/dynamicCounterSlice")

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`)

// subscribe to state changes
store.subscribe(()=> {
    // console.log(store.getState())
});


// counter/increment and counter/decrement dispatch actions
store.dispatch(counterActions.increment())
store.dispatch(counterActions.increment())
store.dispatch(counterActions.increment())

store.dispatch(counterActions.decrement())


// dynamicCounter/increment and dynamicCounter/decrement dispatch actions
store.dispatch(dynamicCounterActions.increment(5))
store.dispatch(dynamicCounterActions.increment(5))
store.dispatch(dynamicCounterActions.increment(5))

store.dispatch(dynamicCounterActions.decrement(8))

/*
action counter/increment @ 22:51:04.668
   prev state { counter: { count: 0 }, dynamicCounter: { count: 0 } }
   action     { type: 'counter/increment', payload: undefined }
   next state { counter: { count: 1 }, dynamicCounter: { count: 0 } }
 action counter/increment @ 22:51:04.675
   prev state { counter: { count: 1 }, dynamicCounter: { count: 0 } }
   action     { type: 'counter/increment', payload: undefined }
   next state { counter: { count: 2 }, dynamicCounter: { count: 0 } }
 action counter/increment @ 22:51:04.675
   prev state { counter: { count: 2 }, dynamicCounter: { count: 0 } }
   action     { type: 'counter/increment', payload: undefined }
   next state { counter: { count: 3 }, dynamicCounter: { count: 0 } }
 action counter/decrement @ 22:51:04.675
   prev state { counter: { count: 3 }, dynamicCounter: { count: 0 } }
   action     { type: 'counter/decrement', payload: undefined }
   next state { counter: { count: 2 }, dynamicCounter: { count: 0 } }
 action dynamicCounter/increment @ 22:51:04.676
   prev state { counter: { count: 2 }, dynamicCounter: { count: 0 } }
   action     { type: 'dynamicCounter/increment', payload: 5 }
   next state { counter: { count: 2 }, dynamicCounter: { count: 5 } }
 action dynamicCounter/increment @ 22:51:04.676
   prev state { counter: { count: 2 }, dynamicCounter: { count: 5 } }
   action     { type: 'dynamicCounter/increment', payload: 5 }
   next state { counter: { count: 2 }, dynamicCounter: { count: 10 } }
 action dynamicCounter/increment @ 22:51:04.676
   prev state { counter: { count: 2 }, dynamicCounter: { count: 10 } }
   action     { type: 'dynamicCounter/increment', payload: 5 }
   next state { counter: { count: 2 }, dynamicCounter: { count: 15 } }
 action dynamicCounter/decrement @ 22:51:04.677
   prev state { counter: { count: 2 }, dynamicCounter: { count: 15 } }
   action     { type: 'dynamicCounter/decrement', payload: 8 }
   next state { counter: { count: 2 }, dynamicCounter: { count: 7 } }
*/

// node rtk/index.js
