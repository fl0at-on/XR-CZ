import React from "react";
import RandomExercise from "./RandomExerciseGenerator/RandomExercise.jsx";
import "./Exercise.css";

const BASE_URL = "https://wger.de/api/v2/";
const EXERCISE_INFO_URL = "exerciseinfo/";
const PAGE = "?page=";

// const ExerciseOutput = {
//   Abs: [
//     { name: "10 min abs", description: "work them out" },
//     { name: "crunches", description: "sit up and down" }
//   ],
//   Chest: [
//     { name: "bench press", description: "push up your arms" },
//     { name: "pec flies", description: "move up and down" }
//   ]
// };

class APICall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseList: [],
      loadingState: false
    };
  }

  callAPI = async () => {
    const cachedHits = localStorage.getItem("exercises");

    if (cachedHits) {
      //console.log(cachedHits);
      this.setState({
        exerciseList: JSON.parse(cachedHits),
        loadingState: false
      });
      return;
    }
    //loop through pages? API currently has 29 pages of exercises
    let res;
    let result;

    let i = 1;
    do {
      //console.log(i);
      const URLConstructor = `${BASE_URL}${EXERCISE_INFO_URL}${PAGE}${i}`;
      const data = await fetch(URLConstructor);
      res = await data.json();

      if (i === 1) {
        result = await res.results;
      } else {
        result = await res.results.concat(result);
      }
      i++;
      //console.log(result);
    } while (res.next !== null);

    // console.log("[callAPI] returns:");
    //console.dir(result);
    //return result;

    //local cache
    localStorage.setItem("exercises", JSON.stringify(result));
    //set state
    this.setState(
      { exerciseList: result, loadingState: false } //, () =>
      //console.log(this.state.exerciseList)
    );
  };

  componentDidMount = () => {
    this.setState({ loadingState: true }, () => this.callAPI());
  };

  render() {
    // console.log("[render] value:");
    // console.log(this.state.exerciseList);
    return (
      <div className="">
        <RandomExercise
          loading={this.state.loadingState}
          exercises={this.state.exerciseList}
        />
      </div>
    );
  }
}

export default APICall;
