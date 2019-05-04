import React from 'react';
import './CharComp.css';

const CharComp = (props) => {
    return (
        <div className="CharComp">
            <p>
                {props.char}
            </p>
        </div>
    )
};

export default CharComp;