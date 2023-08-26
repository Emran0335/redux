const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterSlice = require("../features/dynamicCounter/dynamicCounterSlice");
const { createLogger } = require("redux-logger");
const logger = createLogger();

// confiqure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterSlice,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
