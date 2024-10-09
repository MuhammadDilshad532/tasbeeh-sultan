import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState();

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };

  const handleIncrement = () => {
    if ( limit === "" || limit === undefined || count < limit) {
      setCount(count + 1);
    } else {
      alert(`You have reached the limit of ${limit}`);
    }
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
    setLimit("");
  };

  return (
    <>
      <div className="text-center mt-40 text-2xl ">
        <h1 className="font-bold">Count is {count} </h1>
        <input
          type="text"
          value={limit}
          placeholder="Enter a limit"
          onChange={handleLimitChange}
          className="border border-black block ml-[40%] mt-5 "
        />
        <div className="mt-5">
          <button
            onClick={handleIncrement}
            className="bg-slate-400 p-1 rounded-lg"
          >
            Increment
          </button>
          <button
            disabled={count < 1}
            onClick={handleDecrement}
            className="ml-3 bg-slate-400 p-1 rounded-lg"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
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
