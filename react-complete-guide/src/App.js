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
  // Definimos el estado de nuestro componente.
  state = {
    persons: [
      { id: 'asdf1', name: 'Diego', age: 24 },
      { id: 'asdf2', name: 'Cris', age: 28 }
    ]
  };

  // Función para cambiar uno de los valores del estado a partir del handler de un evento.
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Diego Fernando', age: 24 },
  //       { name: newName, age: 28 }
  //     ],
  //     showPersons: false
  //   });
  // };

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

  render() {
    // Ejemplo de cómo dar estilo inline.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    // Rendereo dinámico de contenido según una propiedad del estado.
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Uso de la función map para renderear de manera dinámica los elementos presentes en mi estado */}
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              // Para este evento necesitamos obtener el evento y pasarlo a la siguiente función, además de pasar el id de la persona que se debe modificar.
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons
        </button>
        {/* Mandamos a llamar la variable que renderea de manera dinámica los elementos del estado */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;