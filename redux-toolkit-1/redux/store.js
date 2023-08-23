const { createStore, combineReducers } = require("redux");
const counterReducer = require("./counter/counterReducer");

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

module.exports = store;
