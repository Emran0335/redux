const { INCREMENT } = require("../counter/actionTypes");
const { DINCREMENT, DDECREMENT } = require("./actionTypes");

// initialState
const initialState = {
  count: 5,
};

// reducer
const dynamicReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    // counter/increment -> taken from counter to increment the counter state.
    case INCREMENT:
      return {
        ...state,
        count: state.count + 20,
      };
    default:
      return state;
  }
};

module.exports = dynamicReducer;
