/* eslint-disable react/prop-types */



//Render Props is a pattern where you pass a function as a prop to share code between components dynamically.

//In easy words

//Render Props ka matlab hai Function ko Prop ke roop mein pass karna Jo apni return value se component ka UI control karta hai.

// Real-Life Example 

// Agar hm API se data fetch kar raha hai aur chah raha hai ki multiple components use karein data ko alag-alag dikhane ke liye .

import { useState } from "react";

function Counter({ render }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };


  return <div>{render(count, increment)}</div>;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-10">Render Props</h1>

      <Counter
        render={(count, increment) => (
          <div className="bg-white p-10 rounded-xl shadow-lg text-center text-black">
            <h1 className="text-3xl font-semibold mb-4">Count: {count}</h1>
            <button
              onClick={increment}
              className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Click Me
            </button>
          </div>
        )}
      />

      <Counter
        render={(count, increment) => (
          <div className="bg-black p-10 rounded-xl shadow-lg text-center text-white">
            <h1 className="text-3xl font-semibold mb-4">Count: {count}</h1>
            <button
              onClick={increment}
              className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Click Me
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default App;
