import React, { Component } from "react";
import FoodTracker from "./FoodTracker.jsx";
import ExerciseTracker from "./ExerciseTracker.jsx";
import WeightTracker from "./WeightTracker.jsx";

import "../App.css";

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
