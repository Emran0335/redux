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
            colors: [...state.colors, color]
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((existingColor) => existingColor !== color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default filterReducer;
