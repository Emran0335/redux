// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial State
const initialaState = {
  value: 0,
};

// Create Reducer Function
const counterReducer = (state = initialaState, action) => {
  // action is an object with type property
  if (action.type === "increment") {
    return {
      // actually it returns a new object as we should not mutate object.
      ...state, // this is called copy of state object.
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);
// get value or data for ui change
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update state initially for the ui
render();

// ui works only after subscribe
store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});

// ui update
