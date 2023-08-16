const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./functions");
const thunk = require("redux-thunk")
// initialState
const initialState = {
  todos: [],
};

// reducer

const reducer = (state = initialState, action) => {
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
    case "todos/todosLoaded":
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
  reducer,
  applyMiddleware(thunk.default)
);

// subscribe to view the state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch({
  type: "todos/todoAdded",
  payload: "Learning Redux Asyncronous Way",
});
// action dispatch, but here a function will be dispatch
store.dispatch(fetchTodos);
