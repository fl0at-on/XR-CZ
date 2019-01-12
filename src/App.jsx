import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const UnitMsmts = {
  metric: { height: "cm", weight: "kg", formula: "(weight/(height*100)^2)" },
  standard: { height: "in", weight: "lb", formula: "(weight/height^2)*703" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { unit: "metric", bmi: 0 };
  }

  onUnitToggle = e => {
    //    console.log(`{onUnitToggle] msg received ${e.target.value}`);
    //    console.log(UnitMsmts[e.target.value].height);

    this.setState({ unit: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("[onSubmit] received");

    const heightValue = document.getElementById("height").value;
    const weightValue = document.getElementById("weight").value;

    let calcedBMI;
    if (this.state.unit === "metric") {
      calcedBMI = weightValue / (((heightValue / 100) * heightValue) / 100);
    } else {
      calcedBMI = (weightValue / (heightValue * heightValue)) * 703;
    }

    this.setState({ bmi: calcedBMI });
  };
  render() {
    return (
      <div>
        <h1>Let's get Calc-ing!</h1>
        <div className="container">
          <h2>BMI Calculator</h2>
          <form autoComplete="off" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="unit-select">Unit:</label>
              </div>
              <div className="col-75">
                <select name="unit-select" onChange={e => this.onUnitToggle(e)}>
                  <option defaultValue value="metric">
                    Metric
                  </option>
                  <option value="standard">Standard</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="height">
                  Height ({UnitMsmts[this.state.unit].height})
                </label>
              </div>
              <div className="col-75">
                <input type="number" id="height" name="height" />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="weight">
                  Weight ({UnitMsmts[this.state.unit].weight})
                </label>
              </div>
              <div className="col-75">
                <input type="number" id="weight" name="weight" />
              </div>
            </div>

            <div className="row">
              <input type="submit" value="Calculate" />
            </div>
          </form>
          <div className="bmi-output">
            <h3>
              Calculated BMI:{" "}
              {this.state.bmi === 0 ? "" : this.state.bmi.toFixed(2)}{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
