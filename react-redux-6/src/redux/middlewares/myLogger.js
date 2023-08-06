import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);
  // toCheck upcoming value
  const upComingState = [action].reduce(rootReducer, store.getState())
  console.log(`Upcoming State: ${JSON.stringify(upComingState)}`)
  // pass action
  return next(action)
};

export default myLogger;
