import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// SOLUCION UTILIZANDO FUNCTION-BASED COMPONENTS Y HOOKS
// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: 'Diego',
//         age: 24
//       },
//       {
//         name: 'Cris',
//         age: 28
//       }
//     ]
//   });

//   const switchNamesHandler = () => {
//     setPersonsState({
//       persons: [
//         {
//           name: 'Diego Fernando',
//           age: 24
//         },
//         {
//           name: 'Alejandra Cristina',
//           age: 28
//         }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>
//         Hi, I'm a React App
//       </h1>
//       <br></br>
//       <button onClick={switchNamesHandler}>Switch Names</button>
//       <br></br>
//       <br></br>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}>
//         My hobbies: Eating and watching movies
//       </Person>
//     </div>
//   )
// };

// export default App;

// SOLUCION UTILIZANDO CLASS-BASED COMPONENTS
class App extends Component {
  state = {
    persons: [
      { name: 'Diego', age: 24 },
      { name: 'Cris', age: 28 }
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Diego Fernando', age: 24 },
        { name: newName, age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Fofi')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Fafi')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        >
          My Hobbies: Eating and watching movies
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;