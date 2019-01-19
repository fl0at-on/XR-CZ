import React, { Component } from "react";
import InputSelect from "./InputSelect.jsx";
import InputText from "./InputText.jsx";
import InputDate from "./InputDate.jsx";
import InputDefault from "./InputDefault.jsx";
import { Options } from "./Options.jsx";

const FilterForm = props => {
  //console.log(props.value["Body Part"]);

  return (
    <form autoComplete="off" onSubmit={e => props.onSubmit(e)}>
      <ul className="grid-container">
        {Options.filters.map(item => {
          switch (item.type) {
            case "select":
              return (
                <InputSelect
                  key={item.id}
                  item={item}
                  onChange={e => props.onChange(e)}
                  value={props.value[item.name]}
                />
              );
            case "text":
              return (
                <InputText
                  key={item.id}
                  item={item}
                  onChange={e => props.onChange(e)}
                  value={
                    props.value[
                      props.value.findIndex(
                        val => Object.keys(val).toString() === item.name
                      )
                    ][item.name]
                  }
                />
              );

            case "date":
              return (
                <InputDate
                  key={item.id}
                  item={item}
                  onChange={e => props.onChange(e)}
                  value={
                    props.value[
                      props.value.findIndex(
                        val => Object.keys(val).toString() === item.name
                      )
                    ][item.name]
                  }
                />
              );
            default:
              return (
                <InputDefault
                  key={item.id}
                  item={item}
                  onChange={e => props.onChange(e)}
                  value={
                    props.value[
                      props.value.findIndex(
                        val => Object.keys(val).toString() === item.name
                      )
                    ][item.name]
                  }
                />
              );
          }
        })}
        <button className="grid-submit nav-btn" type="submit">
          Search{"  "}
          <i className="fa fas fa-search" />
        </button>
      </ul>
    </form>
  );
};

export default FilterForm;
