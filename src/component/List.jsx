import { useContext } from "react";
import noteContext from "../context/notes/createContext";

const List = () => {
  let { todos, taskClear, taskCompleted } = useContext(noteContext);

  return (
    <>
      {todos.length === 0 ? (
        <h2>Enjoy the day, No task added yet</h2>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          {todos.map((todo) => (
            <li key={todo.id} className="align-middle list-item">
              {todo.isDone === true && (
                <i
                  className="fa-solid fa-circle-check mx-2"
                  style={{ fontSize: "24px" }}
                ></i>
              )}
              <span>{todo.task} </span>
              <span className="px-3">{todo.dueDate}</span>
              <button
                className="btn btn-danger float-end"
                onClick={() => taskClear(todo.id)}
              >
                Clear
              </button>
              <button
                className="btn btn-success"
                onClick={() => taskCompleted(todo.id)}
                style={{ backgroundColor: todo.isDone ? "grey" : "green" }}
              >
                Completed
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* {todos.length !== 0 && <ListButtons/>} */}
    </>
  );
};

export default List;
