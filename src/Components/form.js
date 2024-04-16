import React, { Component } from 'react';
export class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
            password:null,
            country:null
        };
    }
    // namechangeHandler = (event) => {
    //     console.log(event.target.value);
    // }
    // changeHandler = ("Name",event) => {
    //     console.log("Select",event.target.value);
    // };
    submitHndler = (event) => {
        event.preventDefault();
      console.log(this.state);
      const name = event.target.name.value;
      const password = event.target.password.value;
      const country = event.target.country.value;
      this.setState({name,password,country},() => {
        console.log(this.state);
     event.target.name.value="" ;
       event.target.password.value="";
      //  event.target.country.value;
      }); 
    };
    render(){
        return <div>
           <form onSubmit={this.submitHndler}>
           <div>
                <label htmlFor=''>Name : </label>
                <input type='text' name='name' onKeyUp={this.namechangeHandler}></input>
            </div>
            <div>
                <label htmlFor="" name="password">Password : </label>
                <input type='password' name='password'></input>
            </div>
            <label htmlFor="" >country : </label>
            <select name='country'>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
            </select>
            <button type="submit">Submit</button>
           </form>
           
        </div>
    }
}
export default Form;