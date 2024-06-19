export default function TodoListReducer(currTodoItems, action) {
  let newTodoItems = currTodoItems;
  switch (action.type) {
    //add new todo in the todo-list
    case "new_todo": {
      newTodoItems = [...currTodoItems, { ...action.payload.newTodo }];
      return newTodoItems;
    }
    //clear the task from the todo list
    case "clear_todo": {
      newTodoItems = currTodoItems.filter(
        (todo) => todo.id !== action.payload.id
      );
      return newTodoItems;
    }
    //single todo completed
    case "complete_todo": {
      newTodoItems = currTodoItems.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
      return newTodoItems;
    }
    //clear all the todo from the todo list
    case "clear_all_todo": {
      newTodoItems = [];
      return newTodoItems;
    }
    //complete all the todo from the todo list
    case "complete_all_todo": {
      newTodoItems = currTodoItems.map((todo) => {
        return {
          ...todo,
          isDone: action.payload.isDone,
        };
      });
      return newTodoItems;
    }
  }
}
