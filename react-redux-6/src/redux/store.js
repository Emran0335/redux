import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));

export default store;
