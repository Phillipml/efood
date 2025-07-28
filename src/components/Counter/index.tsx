import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1>
          <b>Count:</b>
          <span data-testid="counter-view">{count}</span>
        </h1>
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter
