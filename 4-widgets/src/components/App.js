import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const App = () => {

  const [selected, setSelected] = useState(colorOptions[0]);

  // const items = [
  //   {
  //     title: 'What is React?',
  //     description: 'React is THE most popular web framework'
  //   },
  //   {
  //     title: 'Why React?',
  //     description: "Lets us create complex web applications"
  //   }
  // ]
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search></Search> */}
      {/* <Dropdown
        label="Select a color"
        items={colorOptions}
        selected={selected}
        setSelected={setSelected}>
      </Dropdown> */}
      <Translate></Translate>
    </div>
  );
}

const colorOptions = [
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
