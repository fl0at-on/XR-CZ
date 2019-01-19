import React, { Component } from "react";
import FilterForm from "./FilterForm.jsx";
import ActiveFilters from "./ActiveFilters.jsx";
import { Options } from "./Options.jsx";

import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSettings: Options.default
    };
  }

  handleFilterChange = e => {
    //console.log(e.target.value);
    //create copy of filterSettings
    const newFilterSettings = [...this.state.filterSettings];
    const name = e.target.name;
    const value = e.target.value;
    const idx = newFilterSettings.findIndex(
      item => Object.keys(item).toString() === name
    );

    newFilterSettings[idx] = { [name]: value };
    newFilterSettings.sort((a, b) => {
      if (Object.values(a) === "" || Object.values(a) === null) return 1;
      if (Object.values(b) === "" || Object.values(b) === null) return -1;
      if (Object.values(a) === Object.values(b)) return 0;
      return Object.values(a) > Object.values(b) ? -1 : 1;
    });

    this.setState(
      { filterSettings: newFilterSettings } //, () =>
      // console.table(this.state.filterSettings)
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
    const idx = newFilterSettings.findIndex(
      item => Object.keys(item).toString() === name
    );

    /*validation needed:
      select = "", return to "Select One"?
    */

    //if this is the dropdown, make it "Select One"

    newFilterSettings[idx] = { [name]: "" };

    /*validation needed:
      being date <=end date
    */

    newFilterSettings.sort((a, b) => {
      if (Object.values(a) === "" || Object.values(a) === null) return 1;
      if (Object.values(b) === "" || Object.values(b) === null) return -1;
      if (Object.values(a) === Object.values(b)) return 0;
      return Object.values(a) > Object.values(b) ? -1 : 1;
    });

    this.setState(
      { filterSettings: newFilterSettings } //, () =>
      // console.log(this.state.filterSettings)
    );
  };
  render() {
    //console.table(this.state.filterSettings);
    return (
      <div className="filter-container">
        <FilterForm
          onSubmit={e => this.handleSubmit(e)}
          onChange={e => this.handleFilterChange(e)}
          item={this.props}
          value={this.state.filterSettings}
        />
        <ActiveFilters
          item={this.props}
          value={this.state.filterSettings}
          onChange={e => this.deleteFilter(e)}
        />
      </div>
    );
  }
}
export default Filter;