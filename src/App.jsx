import { useState } from "react";
import "./App.css";
function App() {
  const [count , setCount]= useState(0)
  return (
    <>
      <div className="text-center mt-40 text-2xl">
        <h1 className="font-bold">Count is {count} </h1>
        <button onClick={()=> setCount((count) => count +1)}>increment</button>
      </div>
    </>
  );
}

export default App;
