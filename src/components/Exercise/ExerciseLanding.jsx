import React from "react";
import APICall from "./APICall.jsx";
import "./Exercise.css";

class ExerciseLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h2>Random Exercise Generator</h2>
        <APICall />
      </div>
    );
  }
}

export default ExerciseLanding;
