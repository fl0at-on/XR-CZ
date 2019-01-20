import React, { Component } from "react";
import BMI from "./BMI.js";
// import TDEE from "./TDEE.js";
// import IIFYM from "./IIFYM.js";
import "../App.css";

class Calculators extends Component {
  constructor(props) {
    super(props);
    this.state = { unit: "metric", bmi: 0 };
  }

  render() {
    return (
      <div className="container">
        <h1>Calc-U-Later</h1>
        <BMI />
      </div>
    );
  }
}

export default Calculators;
