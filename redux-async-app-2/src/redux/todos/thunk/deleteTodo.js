import { deleted } from "../actions";

const deletedTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    dispatch(deleted(todoId));
  };
};

export default deletedTodo;
