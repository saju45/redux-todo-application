import { loaded } from "../actions";

export const fetchTodos = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");

  const todos = await response.json();

  dispatch(loaded(todos));
};
