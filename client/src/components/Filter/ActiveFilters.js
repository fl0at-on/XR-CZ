import React from "react";

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
              className="active-filter-text"
              name={Object.keys(item)}
              id={Object.keys(item)}
            >
              <span>{Object.keys(item)}</span>
              <span>:</span>

              <span>{Object.values(item)}</span>
              <span
                name={Object.keys(item)}
                className="active-filter-chk "
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
