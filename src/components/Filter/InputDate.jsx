import React, { Component } from "react";
import moment from "moment";

const InputDate = props => {
  //console.log(props);

  let item = props.item;
  return (
    <li className="grid-item">
      <div className="col-25">
        <label htmlFor={item.id}>{item.name}</label>
      </div>
      <div className="col-75">
        <input
          type={item.type}
          id={item.id}
          name={item.name}
          onChange={e => props.onChange(e)}
          value={props.value}
        />
      </div>
    </li>
  );
};

export default InputDate;
