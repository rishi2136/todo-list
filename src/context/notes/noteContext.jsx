import { useReducer } from "react";
import TodoListReducer from "../../reducers/TodoListReducer";
import noteContext from "./createContext";

//create context to hold all states

const TodoItemActionContextProvider = (props) => {
  const [todos, dispatchTodoItem] = useReducer(TodoListReducer, []);
  //addTodo from inputbox component
  let handleSubmit = (evt, addTodo) => {
    evt.preventDefault();
    console.log(" I am executed");
    console.log(addTodo);
    const newItemAction = {
      type: "new_todo",
      payload: {
        newTodo: addTodo,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  let taskClear = (id) => {
    let clearItemAction = {
      type: "clear_todo",
      payload: {
        id: id,
      },
    };
    dispatchTodoItem(clearItemAction);
  };

  let taskCompleted = (id) => {
    let completeTodoAction = {
      type: "complete_todo",
      payload: {
        id: id,
      },
    };
    dispatchTodoItem(completeTodoAction);
  };

  let clearAll = () => {
    let clearAllAction = {
      type: "clear_all_todo",
    };
    dispatchTodoItem(clearAllAction);
  };

  let completeAll = () => {
    let completeAllAction = {
      type: "complete_all_todo",
      payload: {
        isDone: true,
      },
    };
    dispatchTodoItem(completeAllAction);
  };

  return (
    <noteContext.Provider
      value={{
        todos,
        handleSubmit,
        taskClear,
        taskCompleted,
        clearAll,
        completeAll,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default TodoItemActionContextProvider;
