import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, { id: nextTodoId(state), text: action.payload }];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, color: action.payload.color };
        } else {
          return todo;
        }
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });

    case CLEARCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: false };
      });
    default:
      return state;
  }
};

export default reducer;
