import React, { Component } from "react";

const InputSelect = props => {
  //console.log(props.value);

  let item = props.item;
  return (
    <li className="grid-item">
      <div className="col-25">
        <label htmlFor={item.id}>{item.name}</label>
      </div>
      <div className="col-75">
        <select
          name={item.name}
          id={item.id}
          onChange={e => props.onChange(e)}
          defaultValue={"Select One"}
          value={props.value}
        >
          <option disabled>Select One</option>
          {item.options.map((option, index) => {
            return (
              <option key={index} value={option} title={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </li>
  );
};

export default InputSelect;
