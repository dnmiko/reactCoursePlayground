import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                Hi, my name is {props.name} and this is paragraph one.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula condimentum, tempor neque vel, dignissim metus. Integer volutpat leo eget convallis semper.
            </p>
        </div>

    )
};

export default UserOutput;