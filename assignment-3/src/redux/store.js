import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./cart/actionTypes";
import {
  RemoveProductQuantity,
  addManyQuantity,
  addProductQuantity,
} from "./products/actions";

const productManagementMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TO_CART:
      store.dispatch(RemoveProductQuantity(action.paylaod));
      return next(action);
    case REMOVE_FROM_CART:
      store.dispatch(addProductQuantity(action.paylaod));
      return next(action);
    case DELETE_ITEM:
      store.dispatch(addManyQuantity(action.paylaod));
      return next(action);
    default:
      return next(action);
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productManagementMiddleware))
);

export default store;
