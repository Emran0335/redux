// select dom elements
const counterEl = document.getElementById("counter");
const itestText = document.getElementById("itest");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const itestEl = document.getElementById("nested");

// action identifiers and as they are static, they should be in uppercase
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ITEST = "itest";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const itestIncrement = () => {
  return {
    type: ITEST,
  };
};

// initial State
const initialaState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

// Create Reducer Function
const counterReducer = (state = initialaState, action) => {
  // action is an object with type property
  if (action.type === INCREMENT) {
    return {
      // actually it returns a new object as we should not mutate object.
      ...state, // this is called copy of state object.
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else if (action.type === ITEST) {
    const nestedPropertyCopied = {
      ...state,
      properties: {
        ...state.properties,
        b: state.properties.b + 1,
      },
    };
    return nestedPropertyCopied;
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
  itestText.innerText = state.properties.b.toString();
};

// update state initially for the ui
render();

// ui works only after subscribe
store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
  // store.dispatch({
  //   type: INCREMENT, // type is mandatory
  //   // convention is that we can use playload as another property.
  //   payload: 5,
  // });
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});

// ui update for nested properties
itestEl.addEventListener("click", () => {
  store.dispatch(itestIncrement());
});
