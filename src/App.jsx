import { useState } from "react";
import "./App.css";
function App() {
  const [count , setCount]= useState(0)
  return (
    <>
      <div className="text-center mt-40 text-2xl ">
        <h1 className="font-bold">Count is {count} </h1>
        <button onClick={()=> setCount((count) => count +1)} className="bg-slate-400 p-1 rounded-lg">Increment</button>
        <button onClick={()=> setCount((count)=> count -1)} className="ml-3 bg-slate-400 p-1 rounded-lg">Decrement</button>
        <button onClick={()=> setCount((count)=> 0)}  className="ml-3 bg-slate-400 p-1 rounded-lg">Reset</button>
      </div>
    </>
  );
}

export default App;
