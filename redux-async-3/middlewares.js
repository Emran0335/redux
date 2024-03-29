const fetch = require("node-fetch");

const delayMiddleware = (store)=>(next)=>(action)=> {
  if(action.type === "todos/todoAdded") {
    console.log(" I am delaying you!")

    setTimeout(() => {
      next(action)
    }, 2000);

    return;
  }
  next(action)
}

const fetchAsyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  };
  return next(action)
};


module.exports = {
    fetchAsyncMiddleware,
    delayMiddleware,
}