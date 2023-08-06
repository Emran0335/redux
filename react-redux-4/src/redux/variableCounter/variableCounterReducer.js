import { VDCREMENT, VINCREMENT } from "./actionTypes";

const intialState = {
  value: 15,
};

const variableCounterReducer = (state = intialState, action) => {
  switch (action.type) {
    case VINCREMENT:
      return {
        ...state,
        value: state.value + 5,
      };
    case VDCREMENT:
      return {
        ...state,
        value: state.value - 3,
      };
    default:
      return state;
  }
};

export default variableCounterReducer
