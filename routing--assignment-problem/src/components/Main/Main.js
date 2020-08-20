import React from "react";
import { Link } from "react-router-dom";

import './Main.css';

const main = (props) => {
  return (
    <div className='linkContainer'>
      <Link to="/users">
        <p className="linkToSection">Users</p>
      </Link>
      <Link to="/courses">
        <p className="linkToSection">Courses</p>
      </Link>
      <Link to="/instructions">
        <p className="linkToSection">Instructions</p>
      </Link>
    </div>
  );
};

export default main;
