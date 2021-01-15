import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

const App = () => {
  const [selected, setSelected] = useState(options[0]);

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
      {/* <Search></Search> */}
      <Dropdown
        items={options}
        selected={selected}
        setSelected={setSelected}>
      </Dropdown>
    </div>
  );
}

const options = [
  {
    label: 'Crimson Red',
    value: 'red'
  },
  {
    label: 'Neon Green',
    value: 'green'
  },
  {
    label: 'Sky Blue',
    value: 'blue'
  }
];

export default App;
