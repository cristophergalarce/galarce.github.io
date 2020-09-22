import React from "react";
import logo from "./img/G-symbol-ico.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola <code>maybe</code> Te amo.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Toy aprendiendo React
        </a>
      </header>
    </div>
  );
}

export default App;