
import './App.css';
import Person from './Components/Person';
import Man from './Components/Man';
function App() {
  return (
    //javascript +html =jsx
    <div className="App">
      <header className="App-header">
       <h1>I am a React App</h1>
       <h2>AV-Roadlines</h2>
       <Person></Person>
      {/* <Man></Man> */}
      
      </header>
    </div>
    
  );
}

export default App;
