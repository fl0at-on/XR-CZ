import React from "react";
//import { Exercises } from "./ExerciseListing.jsx";

const ExerciseInput = props => {
  //console.log(props);
  return (
    <div>
      <p>Select Body Parts to workout:</p>
      <ul>
        {props.exercises.map((part, index) => {
          return (
            <li key={index}>
              <input
                style={{ display: "none" }}
                type="checkbox"
                name={part}
                id={`${part}-chk`}
                onChange={e => props.onToggle(e)}
              />
              <label htmlFor={`${part}-chk`}>{part}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExerciseInput;
