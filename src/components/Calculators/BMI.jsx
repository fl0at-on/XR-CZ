import React, { Component } from "react";
import "../App.css";

const UnitMsmts = {
  metric: {
    height: "(cm)",
    weight: "(kg)",
    formula: "(weight/(height*100)^2)"
  },
  standard: { height: "(in)", weight: "(lb)", formula: "(weight/height^2)*703" }
};

const BMIFactors = {
  factors: [
    {
      name: "unit",
      text: "Unit",
      inputtype: "select",
      options: [
        { text: "Metric", value: "metric" },
        { text: "Standard", value: "standard" }
      ]
    },
    {
      name: "height",
      text: "Height",
      inputtype: "number"
    },
    {
      name: "weight",
      text: "Weight",
      inputtype: "number"
    }
  ]
};

const RenderInputSwitch = props => {
  switch (props.props.props.inputtype) {
    case "select":
      return (
        <select
          name={props.props.props.name}
          onChange={e => props.onUnitToggle(e)}
        >
          {props.props.props.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );
    default:
      return (
        <input
          type={props.props.props.inputtype}
          id={props.props.props.name}
          name={props.props.props.name}
        />
      );
  }
};

const BMIForm = props => {
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor={props.props.name}>
          {props.props.text} {UnitMsmts[props.unit][props.props.name]}
        </label>
      </div>
      <div className="col-75">
        <RenderInputSwitch
          props={props}
          onUnitToggle={e => props.onUnitToggle(e)}
        />
      </div>
    </div>
  );
};

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = { unit: "metric", bmi: 0 };
  }

  onUnitToggle = e => {
    //console.log(`{onUnitToggle] msg received ${e.target.value}`);
    //console.log(UnitMsmts[e.target.value].height);

    this.setState({ unit: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    //console.log("[onSubmit] received");

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
      <div className="container">
        <h2>BMI Calculator</h2>
        <form autoComplete="off" onSubmit={e => this.onSubmit(e)}>
          {BMIFactors.factors.map((item, index) => {
            return (
              <BMIForm
                key={index}
                unit={this.state.unit}
                onUnitToggle={e => this.onUnitToggle(e)}
                props={item}
              />
            );
          })}
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
    );
  }
}

export default BMI;
