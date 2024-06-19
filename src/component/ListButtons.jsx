import { useContext } from "react";

import noteContext from "../context/notes/createContext";

export default function ListButtons() {
  let { clearAll, completeAll } = useContext(noteContext);
  return (
    <>
      <button className="btn btn-primary ms-2" onClick={completeAll}>
        Complete All
      </button>
      <button className="btn btn-primary ms-2" onClick={clearAll}>
        Clear All
      </button>
    </>
  );
}
