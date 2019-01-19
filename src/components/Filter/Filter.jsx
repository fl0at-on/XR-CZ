import React, { Component } from "react";
import "./Filter.css";

const Options = {
  filters: [
    {
      name: "Body Part",
      type: "select",
      options: [
        "Chest",
        "Back",
        "Shoulders",
        "Biceps",
        "Triceps",
        "Thighs",
        "Glutes",
        "Quads"
      ]
    },
    { name: "Exercise", type: "text" },
    { name: "Begin Date", type: "date" },
    { name: "End Date", type: "date" }
  ],
  default: [
    { Unit: "" },
    { Branch: "" },
    { Exercise: "" },
    { "Begin Date": "" },
    { "End Date": "" }
  ]
};

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSettings: [] //Options.default
    };
  }

  handleFilterChange = e => {
    //console.log(e.target.value);
    //create copy of filterSettings
    const newFilterSettings = [...this.state.filterSettings];
    const name = e.target.name;
    const value = e.target.value;

    //check if this specific key exists in  filterSettings
    if (newFilterSettings.some(criteria => criteria[name])) {
      //console.log("e.target.name is contained in the array already!");

      //update filter's criteria value. could this be simplifed?
      //remove existing index
      newFilterSettings.splice(
        newFilterSettings.findIndex(item => item === e.target.name),
        1
      );

      // //add in new value
      newFilterSettings.push({ [e.target.name]: e.target.value });
    } else {
      //otherwise, add the new filter criteria
      newFilterSettings.push({ [name]: value });
    }

    this.setState(
      { filterSettings: newFilterSettings } //, () =>
      //console.table(this.state.filterSettings)
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    //does nothing for now.
  };

  deleteFilter = e => {
    //two levels up: icon->span->div
    const name = e.target.parentNode.parentNode.id;
    const newFilterSettings = [...this.state.filterSettings];
    // console.log(name);
    // console.table(newFilterSettings);

    //remove the search criteria that was clicked
    if (newFilterSettings.some(criteria => criteria[name])) {
      //remove the element from filterSettings
      //could this be simplifed w/ .pop or delete?

      newFilterSettings.splice(
        newFilterSettings.findIndex(
          item => Object.keys(item).toString() === name
        ),
        1
      );

      this.setState({ filterSettings: newFilterSettings });
    }
  };

  render() {
    //console.table(this.state.filterSettings);
    return (
      <div className="filter-container">
        <form autoComplete="off" onSubmit={e => this.handleSubmit(e)}>
          <ul className="grid-container">
            {Options.filters.map((item, index) => {
              switch (item.type) {
                case "select":
                  return (
                    <li key={index}>
                      <div className="grid-item">
                        <div className="col-25">
                          <label htmlFor={item.name}>{item.name}</label>
                        </div>
                        <div className="col-75">
                          <select
                            name={item.name}
                            onChange={e => this.handleFilterChange(e)}
                          >
                            <option>Select One</option>
                            {item.options.map((option, index) => {
                              return (
                                <option
                                  key={index}
                                  value={option}
                                  title={option}
                                >
                                  {option}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </li>
                  );
                case "text":
                  return (
                    <li key={index}>
                      <div className="grid-item">
                        <div className="col-25">
                          <label htmlFor={item.name}>{item.name}</label>
                        </div>
                        <div className="col-75">
                          <input
                            type={item.type}
                            id={item.name}
                            name={item.name}
                            onChange={e => this.handleFilterChange(e)}
                            //value={this.state.filterSettings[item.name]}
                          />
                          {/* {console.log(item.name)}
                          {console.log(
                            this.state.filterSettings[
                              this.state.filterSettings.findIndex(
                                val => Object.keys(val).toString() === item.name
                              )
                            ]
                          )} */}
                        </div>
                      </div>
                    </li>
                  );

                default:
                  return (
                    <li key={index}>
                      <div className="grid-item">
                        <div className="">
                          <label htmlFor={item.name}>{item.name}</label>
                        </div>
                        <div className="col-75">
                          <input
                            type={item.type}
                            step="0.1"
                            id={item.name}
                            name={item.name}
                            onChange={e => this.handleFilterChange(e)}
                            //value={this.state.filterSettings[item.name]}
                          />
                        </div>
                      </div>
                    </li>
                  );
              }
            })}
            <span>
              <button className="grid-submit" type="submit">
                Search{"  "}
                <i className="fa fas fa-search" />
              </button>
            </span>
          </ul>
        </form>
        <ul className="filtered-container">
          {this.state.filterSettings.map((item, index) => {
            if (Object.values(item).toString() !== "") {
              //console.log(Object.values(item));
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#88ade8",
                    borderRadius: "10px",
                    padding: "5px"
                  }}
                  name={Object.keys(item)}
                  id={Object.keys(item)}
                >
                  <span>{Object.keys(item)}</span>
                  <span>:</span>
                  <span>{Object.values(item)}</span>
                  <span
                    name={Object.keys(item)}
                    style={{
                      backgroundColor: "mistyrose",
                      color: "grey",
                      borderRadius: "10px",
                      textAlign: "center",
                      verticalAlign: "center",
                      paddingLeft: "2px",
                      paddingRight: "2px"
                    }}
                    onClick={e => {
                      this.deleteFilter(e);
                    }}
                  >
                    <i className="fa fas fa-times" />
                  </span>
                </div>
              );
            } else {
              return <div key={index} />;
            } //console.log(item, index, ); // <div key={index}>{item[1]}</div>;
          })}
        </ul>
      </div>
    );
  }
}
export default Filter;
