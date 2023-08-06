import { VDCREMENT, VINCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: VINCREMENT,
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: VDCREMENT,
    payload: value,
  };
};
