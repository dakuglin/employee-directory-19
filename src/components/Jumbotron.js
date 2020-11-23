import React from "react";
import "../styles/Jumbotron.css"

function Jumbotron() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Use the search box below to find an employee by name.</p>
        </div>
      </div>
    );
  }
  
  export default Jumbotron;
