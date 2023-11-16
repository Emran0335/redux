import { DDECREMENT, DINCREMENT } from "./actionTypes"

export const dincrement =(value)=> {
  return {
    type: DINCREMENT,
    payload: value
  }
}
export const ddecrement =(value)=> {
  return {
    type: DDECREMENT,
    payload: value
  }
}
