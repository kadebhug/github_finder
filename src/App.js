import React, { Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => "Shikaal";

  render() {
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName && this.foo()}</h1>
        )}
      </div>
    );
  }
}

export default App;
