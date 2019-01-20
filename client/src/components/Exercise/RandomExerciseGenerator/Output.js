import React from "react";
//import { Exercises } from "./ExerciseListing.js";

const RandomExerciseOutput = props => {
  const toggled = props.item;
  //console.log(toggled);
  //sort it by .part
  toggled.sort((a, b) => {
    if (a.part > b.part) return 1;
    if (b.part > a.part) return -1;
    if (a.part === b.part) return 0;
    return 0;
  });

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Exercises</h3>
      <ul>
        {Object.entries(toggled).map((item, index) => {
          return (
            <li key={index} className="exercise-output-grid">
              <div className="eo-grid-header">{item[1].part}</div>
              <div className="eo-grid-label">Exercise</div>
              <div className="eo-grid-row">{item[1].exercise}</div>
              <div className="eo-grid-label">Description</div>
              <div className="eo-grid-row">
                {item[1].description.replace(/<(?:.|\n)*?>/gm, "")}
              </div>
              <div className="eo-grid-label">Completed</div>
              <div className="eo-grid-row">
                <input type="checkbox" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RandomExerciseOutput;
