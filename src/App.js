import './App.css';
import Demo from './Components/Demo';
import Person from './Components/Person/Person.js';
import Man from './Components/Man';
import { render } from '@testing-library/react';
import { Component } from 'react';
import axios from 'axios';
import ControlledComponent from './Components/ControlledComponent.js'; 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // demo: "Testing",
      persons:[
        {
          id:1,
          name:"Av-Express",
          age:23
        },
        {
          id:2,
          name :"ajay",
          age:34
        },
        {
          id:3,
          name : "vijay",
          age :23,
        },
        {
          id:4,
          name:"Dinesh",
          age:34
        },
        {
          id:5,
          name:"Testing",
          age : 23
        }
      ],
      isShow : true
      ,
      } ;
    this.toggleHandler = this.toggleHandler.bind(this);
   // this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }
  buttonClickHandler = () => {
    // console.log(this.state);
    // console.log(this.props);
    // alert("Hello!");
    console.log(this.state);
  };

  toggleHandler(){
   this.setState({isShow:!this.state.isShow});
  }
   
removeHandler = (personIndex) =>{
  const personscopy = this.state.persons;
  // console.log(persons);
  // console.log(persons[personIndex]);
  console.log(personscopy);
  personscopy.splice(personIndex, 1);
  this.setState({persons: personscopy});
  console.log(personscopy);
};

 render(){
  let persons;
  // persons = this.state.persons.map((p,index)=>{
  //   return <Person 
  //   key={index} 
  //   name={p.name} 
  //   age={p.age} id={p.id} 
    
  //   remove={()=>this.removeHandler(index)} />;
  // });
  if(this.state.isShow){
    persons = this.state.persons.map((p,index)=>{
      return <Person key={index} name={p.name} age={p.age} id={p.id} remove={() => this.removeHandler(index)} />;
    });
  }else{
    persons ="";
  }
  return (
    //javascript +html =jsx
    <div className="App-header" onClick={this.props.remove}>
      
      {/* <header className="App-header">
      
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
       <br/>
       <br/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  />
       <br/>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
       <br/>
       <br/>
       <Person name={this.state.persons[3].name} age={this.state.persons[3].age}  />
       <br/>
  
      
       <button type="button" onClick={this.buttonClickHandler.bind(this)}>click Me</button>

      </header> */}
      <button onClick={this.toggleHandler}>Toggle</button>
      <br/>
      { persons }
      <ControlledComponent/>
    </div>
    
  );
 }
}

export default App;
