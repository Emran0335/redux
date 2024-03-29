import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED
} from "./actionTypes";
import initailState from "./initialState";

const nextTodoId = (todosArr) => {
  const maxId = todosArr.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};
const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOADED:
      // it is a thunk funtion and it will load the actual data to the initialState;
      return action.payload;
      case ADDED:
      // new todo object with id and text.
      return [
        ...state,
        {
          text: action.payload,
          id: nextTodoId(state),
          completed: false,
        },
      ];
    case TOGGLED:
      // completed property of todo should be changed with payload todoId.
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed === true,
          };
        }
      });
    case COLORSELECTED:
      // colors array property of todo should be filled with payload color.
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color: color,
          };
        }
      });
    case DELETED:
      // return new array with true/false boolean condition given by payload as todoId.
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETED:
      // completed property of each todo should be true.
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      // return new array with checking completed property of each todo object of the state array.
      return state.filter((todo) => !todo.completed === true);
    default:
      return state;
  }
};

export default todoReducer;



