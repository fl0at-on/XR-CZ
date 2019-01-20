import React, { Component } from "react";
import "../App.css";

var convert = require("convert-units");

const UnitMsmts = {
  metric: {
    height: "(cm)",
    weight: "(kg)",
    formula: "(weight/(height*100)^2)"
  },
  standard: {
    height: "(in)",
    weight: "(lb)",
    formula: "(weight/height^2)*703"
  },
  bmiTable: [
    { source: "https://www.calculator.net/bmi-calculator.html" },

    {
      category: "Underweight",
      upper: 18.5
    },
    {
      category: "Normal Weight",
      upper: 25
    },
    {
      category: "Overweight",
      upper: 30
    },
    {
      category: "Obese Class I",
      upper: 35
    },
    {
      category: "Obese Class II",
      upper: 40
    },
    {
      category: "Obese Class III",
      upper: 99
    }
  ],
  bmrFormula: [
    {
      gender: "m",
      formula:
        "66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)"
    },
    {
      gender: "f",
      formula:
        "655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)"
    }
  ]
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
      name: "gender",
      text: "Gender",
      inputtype: "select",
      options: [{ text: "Male", value: "m" }, { text: "Female", value: "f" }]
    },
    {
      name: "activity",
      text: "Activity Level",
      inputtype: "select",
      options: [
        {
          text: "Sedentary",
          description: "Little or no Exercise",
          value: 1.2
        },
        {
          text: "Lightly Active",
          description: "Light Exercise (1-3 days/week)",
          value: 1.375
        },
        {
          text: "Moderately Active",
          description: "Moderate Exercise (3-5 days/week)",
          value: 1.55
        },
        {
          text: "Very Active",
          description: "Heavy Exercise (6-7 days/week)",
          value: 1.725
        },
        {
          text: "Extremely Active",
          description: "Very Heavy Exercise (2x/day)",
          value: 1.9
        }
      ]
    },

    {
      name: "age",
      text: "Age (years)",
      inputtype: "number"
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

/*WHAT IS THIS - HOW DO I CLEAN UP PROPS.PROPS.PROPS 
is item=props.props.item *really* a way to handle it?*/
const RenderInputSwitch = props => {
  //console.log(props);
  const item = props.props.item;

  switch (item.inputtype) {
    case "select":
      return (
        <select name={item.name} onChange={e => props.onToggle(e)}>
          {item.options.map((option, index) => {
            return (
              <option
                key={index}
                value={option.value}
                title={option.description}
              >
                {option.text}
              </option>
            );
          })}
        </select>
      );
    default:
      return (
        <input
          type={item.inputtype}
          step="0.1"
          id={item.name}
          name={item.name}
          onChange={e => props.onChange(e)}
        />
      );
  }
};

const BMIForm = props => {
  //console.log(props.item);
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor={props.item.name}>
          {props.item.text} {UnitMsmts[props.unit][props.item.name]}
        </label>
      </div>
      <div className="col-75">
        <RenderInputSwitch
          props={props}
          item={props.item}
          onToggle={e => props.onToggle(e)}
          onChange={e => props.onChange(e)}
        />
      </div>
    </div>
  );
};

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "metric",
      gender: "m",
      activity: 1.2,
      age: 0,
      height: 0,
      weight: 0,
      bmi: [{ value: 0, status: "", risk: "", prime: "" }],
      ponderal_index: 0,
      ideal_weight: 0,
      surface_area: 0,
      bmr: 0,
      tdee: 0,
      whr: [{ value: 0, status: "" }] //waist to height ratio
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleToggle = e => {
    //console.log(`{onUnitToggle] msg received ${e.target.value}`);
    const name = e.target.name;

    this.setState({ [name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    //console.log("[onSubmit] received");

    const age = this.state.age;
    const heightValue = this.state.height;
    const weightValue = this.state.weight;

    // console.log(heightValue);
    //  console.log(this.state.unit);

    //convert entries to metric
    let metricHeight;
    let metricWeight;
    if (this.state.unit !== "metric") {
      metricHeight = convert(heightValue)
        .from("in")
        .to("cm");
      metricWeight = convert(weightValue)
        .from("lb")
        .to("kg");
    } else {
      metricHeight = heightValue;
      metricWeight = weightValue;
    }

    // console.log(metricHeight)
    // console.log(metricWeight)

    //BMR & TDEE calculations
    let BMRValue;
    let TDEEValue;
    if (this.state.gender === "m") {
      BMRValue = 66 + 13.7 * metricWeight + 5 * metricHeight - 6.8 * age;
      TDEEValue = BMRValue * this.state.activity; //factor
    } else {
      BMRValue = 665 + 9.6 * metricWeight + 1.8 * metricHeight - 4.7 * age;
      TDEEValue = BMRValue * this.state.activity; //factor
    }

    // console.log("[onSubmit] BMI Calculations");
    //BMI & Ponderal calculations
    let calcedBMIValue;
    let newPonderal;

    calcedBMIValue = metricWeight / Math.pow(metricHeight / 100, 2);
    newPonderal = (metricWeight / Math.pow(metricHeight / 100, 3)).toFixed(2);

    const newBMI = [...this.state.bmi];

    // console.log("[onSubmit] BMI Details");

    newBMI.value = calcedBMIValue.toFixed(2);
    const bmiStatus = UnitMsmts.bmiTable.filter(category => {
      return category.upper >= Number(newBMI.value);
    })[0].category;

    // console.log(newBMI.value)
    // console.log(bmiStatus)

    newBMI.status = bmiStatus;

    //console.log("[onSubmit] Setting state");

    //set state for all
    this.setState({
      bmi: newBMI,
      ponderal_index: newPonderal,
      bmr: BMRValue.toFixed(0),
      tdee: TDEEValue.toFixed(0)
    });
  };
  render() {
    return (
      <div className="container">
        <h2>BMI, PI, BMR, TDEE Calculator</h2>
        <form autoComplete="off" onSubmit={e => this.onSubmit(e)}>
          {BMIFactors.factors.map((item, index) => {
            return (
              <BMIForm
                key={index}
                unit={this.state.unit}
                onToggle={e => this.handleToggle(e)}
                onChange={e => this.handleChange(e)}
                item={item}
              />
            );
          })}
          <div className="row">
            <input type="submit" value="Calculate" />
          </div>
        </form>
        <div className="bmi-output">
          {this.state.bmi.value !== 0 ? (
            <div>
              <div>
                <h3>BMI: {this.state.bmi.value}</h3>
                <h3>BMI Definition: {this.state.bmi.status}</h3>
              </div>
              <h3>Ponderal Index: {this.state.ponderal_index}</h3>
              <h3>BMR: {this.state.bmr}</h3>
              <h3>TDEE: {this.state.tdee}</h3>
            </div>
          ) : (
            <div>Nothing here so far</div>
          )}
        </div>
      </div>
    );
  }
}

export default BMI;
