import {
  ADD_MANY_QUANTITY,
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionTypes";

const initialState = [];
const nextId = (state) =>
  state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;

const productReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      const newProduct = { ...payload, id: nextId(state) };
      copiedState.push(newProduct);
      return copiedState;
    case ADD_PRODUCT_QUANTITY:
      return copiedState.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case REMOVE_PRODUCT_QUANTITY:
      if (action.payload.quantity <= 0) {
        return state;
      } else {
        return copiedState.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    case ADD_MANY_QUANTITY:
      return copiedState.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity + payload.cartQuantity }
          : item
      );
    default:
      return state;
  }
};

export default productReducer;
