import { BOOK, DELETE } from "./actionType";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  const copiedState = [...state];
  switch (action.type) {
    case BOOK:
      const lastBookId = copiedState[copiedState.length - 1]?.id;
      const newBook = {
        ...action.payload,
        id: lastBookId ? lastBookId + 1 : 1,
      };
      copiedState.push(newBook);
      return copiedState;
    case DELETE:
      const updatedState = copiedState.filter((item) => item.id !== action.id);
      return updatedState;
    default:
      return state;
  }
};

export default bookReducer;
