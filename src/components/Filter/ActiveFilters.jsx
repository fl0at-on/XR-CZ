import React, { Component } from "react";
import Options from "./Options.jsx";

const ActiveFilters = props => {
  // console.log(props);
  return (
    <ul className="filtered-container">
      {props.value.map((item, index) => {
        if (Object.values(item).toString() !== "") {
          //console.log(Object.values(item));
          return (
            <div
              key={index}
              style={{
                backgroundColor: "#88ade8",
                borderRadius: "10px",
                padding: "5px",
                textAlign: "right"
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
                  props.onChange(e);
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
  );
};

export default ActiveFilters;
