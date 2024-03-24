import { FaTrashAlt } from "react-icons/fa";
import { deleteTodo, toggleTodo } from "../redux/todoSlice.js";
import { useDispatch } from "react-redux";
import styles from "./Task.module.css";

const Task = (todo) => {
  const dispatch = useDispatch();

  const deleteHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const toggleHandler = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div className={styles["outer-container"]}>
      {todo.todo.map((item) => {
        return (
          <div key={item.id} className={styles["task-container"]}>
            <h1 className={styles["todo-content"]}>{item.text}</h1>
            <FaTrashAlt
              onClick={() => deleteHandler(item.id)}
              className={styles["icon-delete"]}
            />
            <input
              type={"checkbox"}
              className={styles["checkbox"]}
              onClick={() => toggleHandler(item.id)}
              checked={item.complete}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Task;
