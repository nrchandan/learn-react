import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, addToList] = useState()

  const addNewItem = (newItem) => {
    console.log(newItem)
    addToList([...todolist, newItem ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>To-Do List</h2>

        <input type="text"></input><input type="button" value="Add" onClick={addNewItem}></input>
        
      </header>
    </div>
  );
}

export default App;
