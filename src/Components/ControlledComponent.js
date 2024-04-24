import React, { Component } from "react";
class ControlledComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Av-Readlines",
        };
    }
    changeHandler = (event) =>{
        console.log("old",this.state);
        const name = event.target.value;
        this.setState({name},() =>{
            console.log("new",this.state);
        });
    };
    render() {
        return <div>
            <form>
                <input 
                type="text" 
                name="user_name" 
                value={this.state.name}
                onChange={this.changeHandler}
                />
            </form>

        </div>
    }
}
export default ControlledComponent;