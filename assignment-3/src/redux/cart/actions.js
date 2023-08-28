import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM } from "./actionTypes";

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};
export const deleteCart = (productId) => {
  return {
    type: DELETE_ITEM,
    payload: productId,
  };
};
