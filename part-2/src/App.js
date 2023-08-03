import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [totalCount, setTotalCount] = useState(initialState);

  const total = () => {
    return totalCount.reduce((sum, counter) => sum + counter.count, 0);
  };
  const increment = (id) => {
    const updatedCounter = totalCount.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setTotalCount(updatedCounter);
  };
  const decrement = (id) => {
    const updatedCounter = totalCount.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setTotalCount(updatedCounter);
  };
  return (
    <div className="text-slate-700 bg-gray-100 w-screen h-screen p-10">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5 p-4">
        {totalCount.map((each) => (
          <Counter key={each.id} count={each.count} id={each.id} increment={increment} decrement={decrement} />
        ))}
        <Stats count={total()} />
      </div>
    </div>
  );
}

export default App;
