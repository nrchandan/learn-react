import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const App = () => {
  const items = [
    {
      title: 'What is React?',
      description: 'React is THE most popular web framework'
    },
    {
      title: 'Why React?',
      description: "Lets us create complex web applications"
    }
  ]
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search></Search>
    </div>
  );
}

export default App;
