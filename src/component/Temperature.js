import React, {Component} from 'react';

// Alt + 0176 = °

class Temperature extends Component {
    render() {
        let {temp} = this.props;

        return (
            <h1>{!isNaN(temp) ? temp + "°" : "Error"}</h1>
        );
    }
}

export default Temperature;