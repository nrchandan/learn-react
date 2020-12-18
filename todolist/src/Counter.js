import { useState } from 'react';


const Counter = () => {
  
  const [count, setCount] = useState(100)

  const incrementCount = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  )
}



export default Counter;