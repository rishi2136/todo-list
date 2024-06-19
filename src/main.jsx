import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TodoItemActionContextProvider from "./context/notes/noteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoItemActionContextProvider>
      <App />
    </TodoItemActionContextProvider>
  </React.StrictMode>
);
