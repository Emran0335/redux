const { createStore, applyMiddleware } = require("redux");
const {
  delayActionMiddleware,
  fetchTodosMiddleware,
} = require("./middlewares");
// initialState
const initialState = {
  todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(
  todoReducer,
  applyMiddleware(delayActionMiddleware, fetchTodosMiddleware)
);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learning Redux Asyncronous Way",
// });

// dispatch actions
store.dispatch({
  type: "todos/fetchTodos",
});
