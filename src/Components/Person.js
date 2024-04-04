import React, { Component } from "react";
import Man from "./Man";
import App from "../App";

class Person extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name:"dineshyadyvanshee",
            age:23   
        };
    }
    nameChangeHandler(){
        console.log(this.state);
        this.setState({name:"dinesh", age:23}, () => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div className="App-header">
                {/* <div className="App-header">Name: Av-Roadlines</div>
                <div>Age: 11 years</div> */}
               <h1> <i>Dear {this.state.name} {this.state.age} years Welcome to Av-Roadlines</i>
               <br/>
              <button onClick={this.nameChangeHandler.bind(this)}>click Me</button>
               </h1>
               
                
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
