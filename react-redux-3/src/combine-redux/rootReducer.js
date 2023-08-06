import { combineReducers } from "redux";
import CounterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";


const rootReducer = combineReducers({
  counter: CounterReducer,
  dynamicCounter: dynamicCounterReducer,
})
export default rootReducer;
