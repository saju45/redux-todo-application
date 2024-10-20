import { combineReducers } from "redux";
import filterReducer from "./filters/reducer.js";
import todoReducer from "./todos/reducer.js";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
