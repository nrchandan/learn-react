import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const App = () => {

  const [selected, setSelected] = useState(colorOptions[0]);

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
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          items={colorOptions}
          selected={selected}
          setSelected={setSelected}>
        </Dropdown>        
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
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
