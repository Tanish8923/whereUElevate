import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slice/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-10">Redux Toolkit with Middleware</h1>

      <div className="bg-white p-8 rounded-lg shadow-xl text-black">
        <h2 className="text-3xl mb-4">Count: {count}</h2>

        <div className="flex gap-6">
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
