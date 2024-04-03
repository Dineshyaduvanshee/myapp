import React, { Component } from "react";
import Man from "./Man";
import App from "../App";

class Person extends Component {
    render() {
        return (
            <div className="App-header">
                {/* <div className="App-header">Name: Av-Roadlines</div>
                <div>Age: 11 years</div> */}
                <i>Welcome to Av-Roadlines</i>
                <h2>Testing</h2>
                {/* <Man /> */}
            </div>
        );

        // return React.createElement(
        //     'div',
        //     {class:'App-header'},
        //     React.createElement('h1', null),
        //     React.createElement('i',null,"Welcome to AV-Roeadlines")
        //     );
        }
}

export default Person;
