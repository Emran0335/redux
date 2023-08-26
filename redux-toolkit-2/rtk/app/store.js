const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterSliceReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postSliceReducer = require("../features/post/postSlice")
const { createLogger } = require("redux-logger");
const logger = createLogger();

// confiqure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterSliceReducer,
    posts: postSliceReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
