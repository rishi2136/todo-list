import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function Heading() {
  const {state, update} = useContext(noteContext);
  // useEffect(()=>{
  //   update();
  // }, [])
  return (
  <>
  <h4>This is about {state.name} and he is  in class {state.class}</h4>
  <button onClick={update}>Promote</button>
  </>
    

  );
}