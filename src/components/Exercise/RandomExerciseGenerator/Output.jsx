import React from "react";
//import { Exercises } from "./ExerciseListing.jsx";

const RandomExerciseOutput = props => {
  //console.log(props);
  //const exercises = props.exercises;
  const toggled = props.item;

  //console.log(props.item);

  return (
    <div>
      <p>List of Exercises To Do</p>
      <ul>
        {Object.entries(toggled).map((item, index) => {
          return (
            <li key={index}>
              <h1>{item[1].part}</h1>
              <h2>{item[1].exercise}</h2>
              <h3>{item[1].description}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RandomExerciseOutput;
