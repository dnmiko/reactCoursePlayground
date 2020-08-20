import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.location.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default withRouter(Course);