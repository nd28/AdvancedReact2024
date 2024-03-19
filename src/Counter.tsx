import { app } from "./app"

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = app.store.useCounterState();

  return <div>
    Counter: {count}
    <button onClick={() => setCount(count + 1)}>Add</button>
  </div>
}
export default Counter
