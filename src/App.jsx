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
          type="text"
          value={limit}
          placeholder="enter a limit"
          onChange={handleLimitChange}
          className="border border-black block ml-[40%] mt-5 "
        />
        <div className="mt-5">
          <button
            onClick={() =>
              setCount((count) => (count < limit ? count + 1 : count))
            }
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
            onClick={() => setCount((count) => 0)}
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
