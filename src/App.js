import logo from "./logo.svg";
import "./App.css";
import Button from "./lib/components/Button";
import Card from "./lib/components/Card";

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
        <Button label="It works!" />
        <Card
          alt="Alt text"
          image="https://images.unsplash.com/photo-1674423094915-2546893e2636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="It works!"
        />
      </header>
    </div>
  );
}

export default App;
