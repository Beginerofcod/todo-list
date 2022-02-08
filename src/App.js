import "./App.css";
import React from "react";
import Todoform from "./component/Todoform";

function App() {
  return (
    <div className="App">
      <div className="app_heading">
        <h1 className="heading_title">Todo List</h1>
      </div>
      <div className="form">
        <Todoform />
        <div className="completed">
      </div>
      </div>     
    </div>
  );
}

export default App;
