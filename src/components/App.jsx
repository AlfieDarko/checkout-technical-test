import React, { Component } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div className="container">return something</div>;
};

export default App;

const root = document.getElementById("root");
root ? ReactDOM.render(<App />, root) : false;
