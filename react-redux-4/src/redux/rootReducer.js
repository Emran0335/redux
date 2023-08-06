import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import variableCounterReducer from "./variableCounter/variableCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
  variableCounter: variableCounterReducer,
})

export default rootReducer
