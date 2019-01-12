import React from "react";
import moment from "moment";
import "../App.css";

const Today = moment().format("YYYY-MM-DD");

const AddDayFactors = {
  factors: [
    {
      name: "date",
      text: "Date:",
      inputtype: "date"
    },
    {
      name: "weight",
      text: "Weight:",
      inputtype: "number"
    },
    {
      name: "comment",
      text: "Comment:",
      inputtype: "text"
    }
  ]
};

const RenderInputSwitch = props => {
  //console.log(props);
  switch (props.props.inputtype) {
    case "select":
      return (
        <select name={props.props.name} onChange={e => props.onUnitToggle(e)}>
          {props.props.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );

    case "date":
      return (
        <input
          type={props.props.inputtype}
          id={props.props.name}
          name={props.props.name}
          onChange={e => props.onChange(e)}
          value={Today}
        />
      );

    default:
      return (
        <input
          type={props.props.inputtype}
          id={props.props.name}
          name={props.props.name}
          onChange={e => props.onChange(e)}
        />
      );
  }
};

const AddDay = () => {
  const onChange = () => {
    return; //console.log("onChange received");
  };

  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Add Day functionality:</h1>

      <form onSubmit={e => onSubmit(e)}>
        {AddDayFactors.factors.map((item, index) => {
          return (
            <div key={index} className="row">
              <div className="col-25">
                <label htmlFor={item.name}>{item.text}</label>
              </div>
              <div className="col-75">
                <RenderInputSwitch props={item} onChange={e => onChange(e)} />
              </div>
            </div>
          );
        })}

        <div className="row">
          <div className="row">
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDay;
