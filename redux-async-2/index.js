const { createStore, applyMiddleware } = require("redux");
const { fetchAsyncMiddleware } = require("./middlewares");
const { fetchTodos } = require("./todoMiddleware");
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
const store = createStore(reducer, applyMiddleware(fetchAsyncMiddleware));

// subscribe to view the state changes
store.subscribe(() => {
  console.log(store.getState());
});

// action dispatch, but here a function will be dispatch
store.dispatch(fetchTodos);
