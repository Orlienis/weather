import React, {Component} from 'react';
import './App.css';
import Temperature from "./component/Temperature";
import Eachhour from "./component/Eachhour";

class App extends Component {

    render() {
        let {wxforecast} = this.props;

        return (
            <div className="wx-wrap">
                <section className="wx-header">
                    <h2>{wxforecast.city}</h2>
                    <small>{wxforecast.wx}</small>
                    <Temperature temp={wxforecast.temp}/>
                </section>

                <section className={"wx-today"}>
                    <button className={"move-right"}>Next</button>
                    <button className={"move-left"}>Before</button>
                    <Eachhour/>
                    <Eachhour/>
                    <Eachhour/>
                    <Eachhour/>
                    <Eachhour/>
                    <Eachhour/>
                    <Eachhour/>
                    <Eachhour/>
                </section>

                <section className={"wx-weekly"}>wx-weekly</section>
                <section className={"wx-footer"}>wx-footer</section>
            </div>
        );
    }
}

export default App;
