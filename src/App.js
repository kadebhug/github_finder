import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Using props */}
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
