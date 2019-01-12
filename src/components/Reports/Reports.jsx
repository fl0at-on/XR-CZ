import React, { Component } from "react";
import ExerciseHistory from "./ExerciseHistory.jsx";
import WeightHistory from "./WeightHistory.jsx";
import "../App.css";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Let's get Reporting!</h1>
        <ExerciseHistory />
        <WeightHistory />
      </div>
    );
  }
}

export default Reports;