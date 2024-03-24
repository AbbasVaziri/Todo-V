import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice.js";
import styles from "./Todo.module.css";
import Task from "./Task.jsx";
import NodeSchedule from "./NodeSchedule.jsx";

const Todo = () => {
  const [task, setTask] = useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    if (e.type === "click" || (e.type === "keyup" && e.key === "Enter")) {
      if (task.trim().length === 0) {
        alert("you have to fill");
      } else {
        dispatch(addTodo(task));
        setTask("");
      }
    }
  };

  return (
    <>
      <Task todo={todo} />
      <div className={styles["outer-container"]}>
        <input
          className={styles["input-add"]}
          onKeyUp={addTodoHandler}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className={styles["button-add"]} onClick={addTodoHandler}>
          Add todo
        </button>
      </div>
    </>
  );
};

export default Todo;
