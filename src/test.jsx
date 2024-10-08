import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);   
  const [limit, setLimit] = useState();    
 
  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));   
  };

  return (
    <>
      <div className="text-center mt-40 text-2xl ">
        <h1 className="font-bold">Count is {count} </h1>
        <input
          type="number"
          placeholder="Enter limit"
          value={limit}
          onChange={handleLimitChange}
          className="mb-3 border p-1 rounded-lg"
        />
        <div>
          <button
            onClick={() => setCount((count) => (count < limit ? count + 1 : count))} 
            className="bg-slate-400 p-1 rounded-lg"
          >
            Increment
          </button>
          <button
            disabled={count < 1}
            onClick={() => setCount((count) => count - 1)}
            className="ml-3 bg-slate-400 p-1 rounded-lg"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="ml-3 bg-slate-400 p-1 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
