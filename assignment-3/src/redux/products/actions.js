import {
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
  ADD_MANY_QUANTITY,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addProductQuantity = (productNum) => {
  return {
    type: ADD_PRODUCT_QUANTITY,
    payload: productNum,
  };
};

export const RemoveProductQuantity = (productId) => {
  return {
    type: REMOVE_PRODUCT_QUANTITY,
    payload: productId,
  };
};
export const addManyQuantity = (productNum) => {
  return {
    type: ADD_MANY_QUANTITY,
    payload: productNum,
  };
};
