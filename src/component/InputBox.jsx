import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./InputBox.module.css";

import noteContext from "../context/notes/createContext";

const InputBox = () => {
  const [addTodo, setAddTodo] = useState({});
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  let { handleSubmit } = useContext(noteContext);

  let handleChange = (evt) => {
    setTask(evt.target.value);
  };

  let handleDateChange = (evt) => {
    setDueDate(evt.target.value);
  };

  let handleClick = () => {
    setAddTodo({ task: task, dueDate: dueDate, id: uuidv4(), isDone: false });
    setTask("");
    setDueDate("");
  };

  return (
    <>
      <form onSubmit={(evt) => handleSubmit(evt, addTodo)}>
        <input
          type="text"
          className={`${styles.inputBox} text-box`}
          placeholder="Enter the task"
          value={task}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <input
          type="date"
          value={dueDate}
          className={`${styles.inputBox} text-box`}
          onChange={(evt) => handleDateChange(evt)}
        ></input>
        <button
          type="submit"
          className="btn btn-success float-end"
          onClick={(evt) => handleClick(evt)}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default InputBox;
