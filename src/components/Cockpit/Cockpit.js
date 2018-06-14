import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Cockpit.css';
const cockpit = (props) => {
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
  return (
      <Aux>
          <h1>{props.appTitle}</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
      </Aux>
  );
};

export default cockpit;