import { useState, useTransition } from "react";


function App() {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000

  const handleChange = () => {
    setInput(e.target.value)
    startTransition(() => {
      const L = []
      for (let i = 0; i< LIST_SIZE; 1++){
        L.push(e.target.value)
      }
      setList(L)
    })
  }
  return (
    <>
     <input type="text" vlaue={input} onChange={handleChange}/>
      {isPending
       ? "Loading.." 
       : list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </>
  );
}

export default App;
