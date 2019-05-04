import React from 'react';

const ValidationComp = (props) => {
    let message = null;

    if(props.string.length <= 6) {
        message = (
            <p>
                Message too short!
            </p>
        )
    }
    else{
        message = (
            <p>
                Message too long!
            </p>
        )
    }

    return (
        <div>
            {message}
        </div>
    );
}

export default ValidationComp;