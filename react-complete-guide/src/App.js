import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: 'Diego',
        age: 24
      },
      {
        name: 'Cris',
        age: 28
      }
    ]
  });

  const switchNamesHandler = () => {
    setPersonsState({
      persons: [
        {
          name: 'Diego Fernando',
          age: 24
        },
        {
          name: 'Alejandra Cristina',
          age: 28
        }
      ]
    });
  };

  return (
    <div className="App">
      <h1>
        Hi, I'm a React App
      </h1>
      <br></br>
      <button onClick={switchNamesHandler}>Switch Names</button>
      <br></br>
      <br></br>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}>
        My hobbies: Eating and watching movies
      </Person>
    </div>
  )
};

export default App;