import React, { Component } from 'react';

import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import WithClass from "../HOC/WithClass";

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
  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
    this.titleRef = React.createRef();
  }

  // Definimos el estado de nuestro componente. Esto puede ser realizado dentro del constructor, esta manera de hacerlo es solamente una nueva funcionalidad de ES6 que crea un constructor y super(props) de manera implícita.
  state = {
    persons: [
      { id: 'asdf1', name: 'Diego', age: 24 },
      { id: 'asdf2', name: 'Cris', age: 28 }
    ],
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  // Función para manejar los cambios en un input, esto modifica el estado del componente. 
  nameChangedHandler = (event, id) => {
    // Encontramos el index de la persona dentro del estado.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Creamos un nuevo objeto igual al objeto del estado que corresponde a la persona en cuestión.
    const person = {
      ...this.state.persons[personIndex]
    };

    // Cambiamos el nombre en el nuevo objeto.
    person.name = event.target.value;

    // Creamos una copia completa del arreglo de personas dentro del estado para no modificar el arreglo real y posteriormente modificamos a la persona antigua con la nueva persona en la posición que obtuvimos previamente.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // Actualizamos el estado.
    this.setState({
      persons: persons
    });
  }

  // Función que hace switch a una propiedad del estado cuando se da clic en un botón.
  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({
      showPersons: !currentState
    })
  }

  // Función que remueve a una persona del estado.
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    // Método que elimina un elemento de un arreglo a partir de un index.
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  loginHandler = () => {
    this.setState((prevState, props) => {
      return {
        authenticated: !prevState.authenticated
      }
    })
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
    this.titleRef.current.style.color = "green";
  }

  render() {
    console.log('[App.js] render');
    // Ejemplo de cómo dar estilo inline.
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid green',
    //   padding: '8px',
    //   cursor: 'pointer'
    // }

    let persons = null;

    // Rendereo dinámico de contenido según una propiedad del estado.
    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
      );
    }

    return (
      <WithClass className={Classes.App}>
        <h2 ref={this.titleRef}>
          Este elemento tiene una Ref que lo hace cambiar de color
        </h2>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          condition={this.state.showPersons}
          login={this.loginHandler}
        />
        {/* Mandamos a llamar la variable que renderea de manera dinámica los elementos del estado */}
        {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;