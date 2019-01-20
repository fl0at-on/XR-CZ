import React from "react";
//import { Exercises } from "./ExerciseListing.jsx";
import InputItem from "./InputItem.jsx";

const ExerciseInput = props => {
  //console.log(props.toggled);

  return (
    <div>
      <h2 style={{ textAlign: "right" }}>Body Parts</h2>
      <ul>
        {props.exercises.map((part, index) => {
          return (
            <InputItem
              key={index}
              toggled={props.toggled}
              part={part}
              onChange={e => props.onToggle(e)}
            />
          );
        })}
        <button className="input-btn" onClick={e => props.toggleAll(e)}>
          Clear All
        </button>
      </ul>
    </div>
  );
};

export default ExerciseInput;
