import React, { Component } from 'react';
import './App.css';
import ValidationComp from './ValidationComp/ValidationComp';
import CharComp from './CharComp/CharComp';

class App extends Component {
  state = {
    string: ''
  }

  valueChangedHandler = (event) => {
    this.setState({
      string: event.target.value
    })
  };

  deleteCharHandler = (charIndex) => {
    const stringArray = this.state.string.split('');
  }

  render() {
    let letters = (
      <div>
        {this.state.string.split('').map((char, index) => {
          return <CharComp char={char} />
        })}
      </div>
    )

    return (
      <div className="App">
        <h1>
          Segundo assignment del curso
        </h1>
        <input type="text" onChange={this.valueChangedHandler} />
        <p>
          La longitud del string ingresado es de: {this.state.string.length}
        </p>
        <ValidationComp string={this.state.string}/>
        {letters}
      </div>
    );
  }
}

export default App;
