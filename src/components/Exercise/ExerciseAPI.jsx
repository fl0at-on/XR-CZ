import React from "react";
import RandomExercise from "./RandomExercise.jsx";
import "./Exercise.css";

const BASE_URL = "https://wger.de/api/v2/";
const EXERCISE_INFO_URL = "exerciseinfo/";
const PAGE = "?page=";

const ExerciseOutput = {
  Abs: [
    { name: "10 min abs", description: "work them out" },
    { name: "crunches", description: "sit up and down" }
  ],
  Chest: [
    { name: "bench press", description: "push up your arms" },
    { name: "pec flies", description: "move up and down" }
  ]
};

class APICall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseList: []
    };
  }

  callAPI = async () => {
    const URLConstructor = `${BASE_URL}${EXERCISE_INFO_URL}`;
    const data = await fetch(URLConstructor);
    const res = await data.json();
    const result = await res.results;

    // console.log("[callAPI] returns:");
    // console.dir(result);
    //return result;
    this.setState(
      { exerciseList: result } //, () =>
      //console.log(this.state.exerciseList)
    );
  };

  componentDidMount = () => {
    this.callAPI();
  };

  render() {
    // console.log("[render] value:");
    // console.log(this.state.exerciseList);
    return (
      <div className="">
        <RandomExercise exercises={this.state.exerciseList} />
      </div>
    );
  }
}

export default APICall;
