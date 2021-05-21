import logo from './logo.svg';
import './App.css';
import Category from './Components/Category';
import SomeCategory from './Components/SomeCategory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Category id={10}/>
      <SomeCategory id={1}/>
    </div>
  );
}

export default App;
