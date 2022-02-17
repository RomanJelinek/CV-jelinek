import React, { useState } from "react";
import "./SwitchDarkMode.css";
  

const Switch = (props) => {

const [isSwitched, setIsSwitched] = useState(false)


const switchHandler = (e) => {
  props.getSwitch(e.target.checked)
  setIsSwitched(e.target.checked)
}

  return (
    <div className="switcher">
      <input
        onChange={switchHandler}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      {isSwitched && (
        <label
          style={{ background: "grey" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      )}
      {!isSwitched && (
        <label
          style={{ background: "yellow"  }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      )}
    </div>
  );
};

export default Switch;
