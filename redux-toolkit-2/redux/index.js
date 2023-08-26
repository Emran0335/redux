const store = require("./store");
const { increment} = require("./counter/actions");
const { increment, decrement } = require("./counter/actions");
const { dIncrement, dDecrement } = require("./dynamicCounter/actions");

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

dispatch actions(counter)
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());

// dispatch actions(dynamicCounter)
store.dispatch(dIncrement(5));
store.dispatch(dIncrement(5));
store.dispatch(dIncrement(5));

store.dispatch(dDecrement(5));

// both state changes. Actually this action works in both reducers. That can be done in redux toolkit using extraReducers.
store.dispatch(increment()); // { counter: { count: 1 }, dynamicCounter: { count: 25 } }

// node redux/index.js
