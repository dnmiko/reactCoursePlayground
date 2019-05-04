import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name : 'Cristina'
  }

  nameChangedhandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Primer assignment del curso de React</h1>
        <UserInput changed={this.nameChangedhandler} name={this.state.name}/>
        <UserOutput name={this.state.name}/>
        <UserOutput name="Diego"/>
      </div>
    );
  }

}

export default App;