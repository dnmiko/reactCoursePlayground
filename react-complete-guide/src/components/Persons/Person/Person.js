import React, { useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";

//High order component para envolver los componentes sin necesidad de tener un contenedor div.
// import WithClass from "../../../HOC/WithClass";
import Auxiliar from "../../../HOC/Auxiliar";
import withClassFunction from "../../../HOC/withClassFunction";
import AuthContext from "../../../context/auth-context";

import classes from "./Person.css";

const person = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputReference = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authContext = useContext(AuthContext);;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    //Este HOC no hace nada más que envolver los JSX para que estén dentro de un wrapper
    <Auxiliar>
      {authContext.authenticated ? (
        <p>Estoy autenticado</p>
      ) : (
        <p>Please Log in</p>
      )}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        ref={inputReference}
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </Auxiliar>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClassFunction(person, classes.Person);
