import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";
export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const kuadrat = count * count;
  return (
    <div className="w-full flex justify-center items-start mt-6">
      <div className="flex flex-row justify-between items-center text-7xl">
        <button
          className="bg-green-500 p-2"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="mx-4">{count}</span>
        <span className="mx-4">{kuadrat}</span>
        <button
          className="bg-yellow-500 p-2"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
