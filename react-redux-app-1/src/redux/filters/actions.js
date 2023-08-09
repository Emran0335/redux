import { STATUSCHANGED } from "./actionTypes"


export const statusChanged =(status)=> {
  return {
    type: STATUSCHANGED,
    payload: {
      status: status,
    }
  }
}


export const colorChanged =(color, changedType)=> {
  return {
    type: STATUSCHANGED,
    payload: {
      color,
      changedType,
    }
  }
}

