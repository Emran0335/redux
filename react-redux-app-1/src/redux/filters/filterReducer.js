import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initailState from "./initialState";

const filterReducer = (state = initailState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changedType } = action.payload;
      switch (changedType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default filterReducer;

/*
// filter reducer
const filterInitialState = {
  status: "All",
  colors: [],
};

const statusChanged = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

const filterReducerStatusAction = (state, action) => {
  switch (action.type) {
    case "changeStatus":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

const filterStatusActionResult = filterReducerStatusAction(
  filterInitialState,
  statusChanged("changeStatus", "Complete")
);
console.log("filterStatusActionResult", filterStatusActionResult);

const colorChanged = (type, color, changedType) => {
  return {
    type: type,
    payload: {
      color: color,
      changedType: changedType,
    },
  };
};

const filterReducerColorChanged = (state, action) => {
  switch (action.type) {
    case "changedColor":
      const { color, changedType } = action.payload;
      switch (changedType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

const filterColorChangedResult = filterReducerColorChanged(
  filterInitialState,
  colorChanged("changedColor", "blue", "added")
);
console.log("filterColorChangedResult", filterColorChangedResult);
*/
