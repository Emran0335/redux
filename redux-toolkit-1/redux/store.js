const { createStore, combineReducers } = require("redux");
const counterReducer = require("./counter/counterReducer");
const dynamicReducer = require("./dynamicCounter/dynamicReducer");

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicReducer,
});

const store = createStore(rootReducer);

module.exports = store;
