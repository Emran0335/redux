const actions = [
  {
    type: "increment",
    payload: 1,
  },
  {
    type: "increment",
    payload: 1,
  },
  {
    type: "increment",
    payload: 1,
  },
  {
    type: "decrement",
    payload: 1,
  },
];

const initialState = {
  value: 0,
};

const counterReducer = (state, action) => {
  // state will get initialState value from the given initial value which is reduce method's initialvalue(preStoreResult = 0)
  // action is here currentValue(actions) of reduce method.
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    state;
  }
};

// reduce method can also take function as parameter
const finalResult = actions.reduce(counterReducer, initialState);
// counterReducer means a callbackFunction and it takes two parameters. Its preStoreResult value is initialState object and Its currentEachValue is action object property types.
console.log(finalResult); // {value: 2}
console.log(finalResult.value); // 2

//
const arrayReduce = [1, 2, 3, 4, 5];
const arrayResult = arrayReduce.reduce((preStoreResult = initialValue, currentEachValue) => {
  return preStoreResult + currentEachValue;
}, (initialValue = 0));
console.log(arrayResult) // 15
