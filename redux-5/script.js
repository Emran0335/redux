// select dom elements
const anotherMatchEl = document.getElementById("anotherMatch");
const incrementInputEl = document.getElementById("incrementInput");
const decrementInputEl = document.getElementById("decrementInput");
const totalScoreEl = document.getElementById("totalScore");
const resetBtnEl = document.getElementById("resetBtn");
const createMatchEl = document.getElementById("createMatch");
const addMatchEl = document.getElementById("addMatch");

// initialState
const initialState = {
  count: 120,
};
// constant
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// reducer actions
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

// reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - action.payload,
    };
  } else if (action.type === "reset") {
    return {
      ...state,
    };
  } else {
    return state;
  }
};

// creation of store
const store = Redux.createStore(counterReducer);

// ui update with initailState
const render = () => {
  const currentState = store.getState();
  if (currentState.count >= 120) {
    totalScoreEl.innerText = currentState.count;
  }
};
render();
store.subscribe(render);

// increment input
incrementInputEl.addEventListener("keypress", (event) => {
  const inputValue = Math.floor(event.target.value);
  console.log("Hello");
  if (event.key === "Enter") {
    event.preventDefault();
    store.dispatch(increment(inputValue));
  }
});
decrementInputEl.addEventListener("keypress", (event) => {
  const inputValue = Math.floor(event.target.value);
  if (event.key === "Enter") {
    event.preventDefault();
    store.dispatch(decrement(inputValue));
  }
});

// create new match
function duplicateChildNodes(parentId) {
  let parent = document.getElementById(parentId);
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = parent.childNodes;
  children.forEach(function(item) {
    let cln = item.cloneNode(true)
    parent.appendChild(cln)
  })
}
anotherMatchEl.addEventListener("click", (e)=> {
  e.preventDefault();
  duplicateChildNodes("addMatch")
})
