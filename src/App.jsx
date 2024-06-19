import { useContext } from "react";
import "./App.css";
import InputBox from "./component/InputBox.jsx";
import List from "./component/List.jsx";
import ListButtons from "./component/ListButtons.jsx";
import noteContext from "./context/notes/createContext.js";

function App() {
  let { todos } = useContext(noteContext);
  return (
    <div className="myList">
      <InputBox />
      <List />
      {todos.length !== 0 && <ListButtons />}
    </div>
  );
}

export default App;
