import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState();
  const [wazifa, setWazifa] = useState(""); // Track selected wazifa
  const [completedWazifa, setCompletedWazifa] = useState(""); // Track completed wazifa

  // Create an audio object for your MP3 (ensure the file name and path are correct)
  const wazifaAudio = new Audio("/ayate.mp3"); // MP3 file path in public folder

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };

  const handleWazifaChange = (e) => {
    setWazifa(e.target.value); // Update wazifa when dropdown changes
  };

  const handleIncrement = () => {
    if (limit === "" || limit === undefined || count < limit) {
      setCount(count + 1);
    } else {
      alert(`You have reached the limit of ${limit}`);
      setCompletedWazifa(wazifa); // Set the completed wazifa
      wazifaAudio.play(); // Play the audio when the limit is reached
    }
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
    setLimit("");
    setCompletedWazifa(""); // Reset completed wazifa
  };

  return (
    <>
      <div className="text-center mt-40 text-2xl">
        <h1 className="font-bold">Count is {count} </h1>

        {/* Wazifa Selection Dropdown */}
        <select
          value={wazifa}
          onChange={handleWazifaChange}
          className="border border-black block ml-[40%] mt-5"
        >
          <option value="">Select a Wazifa</option>
          <option value="Wazifa 1">Wazifa 1</option>
          <option value="Wazifa 2">Wazifa 2</option>
          <option value="Wazifa 3">Wazifa 3</option>
          <option value="Wazifa 4">Wazifa 4</option>
        </select>

        <input
          type="text"
          value={limit}
          placeholder="Enter a limit"
          onChange={handleLimitChange}
          className="border border-black block ml-[40%] mt-5"
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

        {/* Display Completed Wazifa */}
        {completedWazifa && (
          <div className="mt-5 text-xl font-bold">
            Completed Wazifa: {completedWazifa}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
