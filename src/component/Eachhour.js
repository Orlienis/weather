import React, {Component} from 'react';
import Temperature from "./Temperature";

class Eachhour extends Component {
    render() {
        return (
            <div>
                <p>hour</p>
                <p>icon</p>
                <Temperature temp={25}/>
            </div>
        );
    }
}

export default Eachhour;