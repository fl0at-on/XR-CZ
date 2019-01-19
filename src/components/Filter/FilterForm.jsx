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
        {Options.filters.map((item, index) => {
          switch (item.type) {
            case "select":
              return (
                <InputSelect
                  key={index}
                  item={item}
                  onChange={e => props.onChange(e)}
                  value={props.value[item.name]}
                />
              );
            case "text":
              return (
                <InputText
                  key={index}
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
                  key={index}
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
                  key={index}
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
        <span>
          <button className="grid-submit nav-btn" type="submit">
            Search{"  "}
            <i className="fa fas fa-search" />
          </button>
        </span>
      </ul>
    </form>
  );
};

export default FilterForm;
