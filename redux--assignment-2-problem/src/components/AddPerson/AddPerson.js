import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: null,
  };

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.inputChangeHandler}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={this.state.age}
          onChange={this.inputChangeHandler}
        />
        <button onClick={() =>  this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
