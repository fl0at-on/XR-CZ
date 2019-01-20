import React from "react";
//import { Exercises } from "./ExerciseListing.js";
import RandomExerciseInput from "./Input.js";
import RandomExerciseOutput from "./Output.js";
//import * from "../"

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

    if (prevProps !== this.props) {
      //console.log(this.props);
      const uniqueParts = this.props.exercises
        .map(item => item.category.name)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort();

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

  toggleAll = e => {
    //add/remove all body parts to render
    //currently will only be able to turn 'off', not turn on.
    //toggledParts array doesn't save the name if it's off.
    //loop over all of this.state.toggledParts?
    this.setState(
      { toggledParts: [] } //, () =>
      //console.table(this.state.toggledParts)
    );
  };

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
    //console.log(this.props);
    let isLoading = this.props.loading;
    if (!isLoading) {
      return (
        <div className="exercise-container">
          <RandomExerciseInput
            toggleAll={e => this.toggleAll(e)}
            exercises={this.state.uniqueParts}
            toggled={this.state.toggledParts}
            onToggle={e => this.handleToggle(e)}
          />
          <RandomExerciseOutput
            //exercises={this.state.outputParts}
            item={this.state.toggledParts}
          />
        </div>
      );
    } else {
      return (
        <div className="exercise-container">
          <span>Loading!</span>
        </div>
      );
    }
  }
}

export default RandomExercise;
