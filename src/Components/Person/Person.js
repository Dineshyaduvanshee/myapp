import React, { Component } from "react";
import PersonStyle from"./Person.module.css";
import Man from "../Man";
import App from "../../App";

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
        console.log(PersonStyle)
        const style = {
            fontSize:"20px",
            color:"red"
        }
        return (

            <div className={PersonStyle.PersonBox} onClick={ this.props.remove}>
                {this.props.index}
                {/* <div className="App-header">Name: Av-Roadlines</div>
                <div>Age: 11 years</div> */}
               <h1> <label className="PersonLabel">Name : </label> <i>{this.props.name}</i>
               <br/>
               <label style={style}>Age : </label> <i style={{ color:"blue" }} >{this.props.age} </i>
               <br/>
               
              <button onClick={this.nameChangeHandler.bind(this)}>click Me</button>
               </h1>
                
                {/* <Person name={this.state.per.name[0]} age="22" /> */}
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
