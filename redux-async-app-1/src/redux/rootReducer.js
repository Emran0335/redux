import {combineReducers} from "redux"
import todoReducer from "./todos/todoReducer";
import filterReducer from "./filters/filterReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer
})

export default rootReducer;
