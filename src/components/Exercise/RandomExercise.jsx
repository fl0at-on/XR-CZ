import React from "react";
import { Exercises } from "./ExerciseListing.jsx";
import RandomExerciseInput from "./RandomExerciseInput.jsx";
import RandomExerciseOutput from "./RandomExerciseOutput.jsx";
import "./Exercise.css";

class RandomExercise extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    toggledParts: [],
    uniqueParts: [],
    outputParts: []
  };
  // }

  componentDidUpdate(prevProps, prevState) {
    //this runs before props are passed through from ExerciseAPI. Setting state here won't work for props received.
    /*Returns unique BodyParts from props for Input component */
    // console.log(prevProps);
    // console.log(this.props);

    if (prevProps !== this.props) {
      const uniqueParts = this.props.exercises
        .map(item => item.category.name)
        .filter((value, index, self) => self.indexOf(value) === index);

      //console.log(uniqueParts);

      /*Associates between exercises.category.name => exercises.name for Output component*/
      let outputParts = {};
      let outputResult = this.props.exercises.map(obj => {
        if (outputParts[obj.category.name]) {
          return outputParts[obj.category.name].push({
            name: obj.name,
            description: obj.description
          });
        } else {
          return (outputParts[obj.category.name] = [
            { name: obj.name, description: obj.description }
          ]);
        }
      });
      this.setState({ uniqueParts: uniqueParts, outputParts: outputParts });
    }
  }

  handleToggle = e => {
    const newToggledParts = [...this.state.toggledParts];

    if (e.target.checked) {
      let randVal = Math.floor(
        Math.random() * this.state.outputParts[e.target.name].length
      );
      newToggledParts.push({
        part: e.target.name,
        exercise: this.state.outputParts[e.target.name][randVal].name,
        description: this.state.outputParts[e.target.name][randVal].description
      });
    } else {
      newToggledParts.splice(
        newToggledParts.findIndex(item => item.part === e.target.name),
        1
      );
    }

    this.setState(
      { toggledParts: newToggledParts } //, () =>
      //console.table(this.state.toggledParts)
    );
  };

  render() {
    // console.log(this.state.outputParts);
    // console.log(this.state.uniqueParts);
    //console.log(this.props);

    return (
      <div className="exercise-container">
        <RandomExerciseInput
          exercises={this.state.uniqueParts}
          onToggle={e => this.handleToggle(e)}
        />
        <RandomExerciseOutput
          //exercises={this.state.outputParts}
          item={this.state.toggledParts}
        />
      </div>
    );
  }
}

export default RandomExercise;
