import { useState } from 'react';


// 1. Basic syntax
// function Button(parameters) {
//   function handleClick() {
//     return parameters.onClickFunction(parameters.increment)
//   }
//   return <button onClick={handleClick}>+{parameters.increment}</button>
// }

// 2. Using object destructuring
// function Button(parameters) {
//   const {increment, onClickFunction} = parameters
//   function handleClick() {
//     return onClickFunction(increment)
//   }
//   return <button onClick={handleClick}>+{increment}</button>
// }

// 3. Using object destructuring and arrow functions
const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

// + Replaced arrow functions with old-style JS functions
// + Replaced prettified Button function call with regular JS function call.
// - Replaced destructured param with regular param


// const App = () => {
function App() {
  const [count, setCount] = useState(0)

  // const incrementCount = increment => {
  //   setCount(count + increment)
  // }
  function incrementCount(increment) {
    setCount(count + increment);
  }

  const komalDhyanDeObject = {increment: 1, onClickFunction: incrementCount}

  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount}/>
      { Button(komalDhyanDeObject) }

      <Button increment={10} onClickFunction={incrementCount}/>
      <Button increment={100} onClickFunction={incrementCount}/>
      <Button increment={1000} onClickFunction={incrementCount}/>
      <span>{count}</span>
    </div>
  )
}

export default App;
