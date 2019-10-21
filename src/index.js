import React from "react";
import ReactDOM from "react-dom";
import Products from "./Products.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>My React App</h1>
        </header>
        <section>
          <Products />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
