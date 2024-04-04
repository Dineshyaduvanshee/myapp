
import './App.css';
import Demo from './Components/Demo';
import Person from './Components/Person/Person.js';
import Man from './Components/Man';
import { render } from '@testing-library/react';
import { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      demo: "Testing",
    };    
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }
  buttonClickHandler = () => {
    // console.log(this.state);
    // console.log(this.props);
    // alert("Hello!");
    console.log(this.state);
  };
 render(){
  return (
    //javascript +html =jsx
    <div className="App">
      
      <header className="App-header">
       <Person name="Av-Roadlines" age="11" />
       <button type="button" onClick={this.buttonClickHandler.bind(this)}>click Me</button>

      </header>
    </div>
    
  );
 }
}

export default App;
