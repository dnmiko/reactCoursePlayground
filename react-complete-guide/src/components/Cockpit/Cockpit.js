import React, { useEffect } from "react";
import styled from 'styled-components';

import Classes from "./Cockpit.css";

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log('[Cockpit.js] useEffect for a change in persons')
  }, [props.persons]);
  
  const StyledButton = styled.button`
    background-color: ${props => (props.condition ? "red" : "green")};
    color: white;
    font: inherit;
    border: 1px solid ${props => (props.condition ? "salmon" : "green")};
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => (props.condition ? "salmon" : "lightgreen")};
      color: black;
    }
  `;

  const classes = [];

  if (props.persons.length <= 1) {
    classes.push(Classes.red);
  }

  if (props.persons.length <= 0) {
    classes.push(Classes.bold);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <StyledButton 
        onClick={props.clicked} 
        condition={props.condition}
      >
        Toggle persons
      </StyledButton>
      <button
        onClick={props.login}
      >
        Log in
      </button>
    </div>
  );
};

export default cockpit;
