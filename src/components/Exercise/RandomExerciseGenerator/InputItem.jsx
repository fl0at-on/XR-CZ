import React from "react";

const InputItem = props => {
  let part = props.part;
  let toggled = props.toggled;
  //console.log(props);

  //console.log(toggled);

  let val = false;
  for (let i = 0; i < toggled.length; i++) {
    if (toggled[i].part === part) {
      val = true;
      break;
    }
  }
  //console.log(val);

  return (
    <li>
      <input
        style={{ display: "none" }}
        type="checkbox"
        name={part}
        id={`${part}-chk`}
        onChange={e => props.onChange(e)}
        checked={val}
      />
      <label className="input-lbl" htmlFor={`${part}-chk`}>
        {part}
      </label>
    </li>
  );
};

export default InputItem;
