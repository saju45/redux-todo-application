import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state?.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const filterByStatus = (todo) => {
    const { status } = filters;

    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;
      case "All":
        return todo;
      default:
        todo;
    }
  };

  const filterByColor = (todo) => {
    const { colors } = filters;

    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }

    return true;
  };

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      {/* <Todo /> */}
    </div>
  );
}
