import React, { Component } from "react";
import FoodTracker from "./FoodTracker.js";
import ExerciseTracker from "./ExerciseTracker.js";
import WeightTracker from "./WeightTracker.js";

import "../App.css";
import "./Trackers.css";

class Trackers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Let's get Tracking!</h1>
        <WeightTracker />
        <FoodTracker />
        <ExerciseTracker />
      </div>
    );
  }
}

export default Trackers;
