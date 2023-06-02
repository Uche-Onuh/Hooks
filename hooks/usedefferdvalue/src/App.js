import { useState } from "react";
import List from "./List";


function App() {
  const [input, setInput] = useState("");

  const LIST_SIZE = 20000

  const handleChange = () => {
    setInput(e.target.value)
  }
  return (
    <>
     <input type="text" value={input} onChange={handleChange}/>
      <List input={input}/>
    </>
  );
}

export default App;
