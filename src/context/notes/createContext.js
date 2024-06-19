import { createContext } from "react";



const noteContext = createContext({
  todos: [],
  handleSubmit: () => { },
  taskClear: () => { },
  taskCompleted: () => { },
  clearAll: () => { },
  completeAll: () => { },
});

export default noteContext;