import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        // Para este evento necesitamos obtener el evento y pasarlo a la siguiente función, además de pasar el id de la persona que se debe modificar.
        changed={event => props.changed(event, person.id)}
      />
    );
});

export default persons;