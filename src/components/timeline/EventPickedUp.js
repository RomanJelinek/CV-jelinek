import React from "react";
import "./TimeLine.css";
import Pointer from "./Pointer";

const EventPickedUp = (props) => {
    const events = props.events
    const pointer = props.pointer

  return (
    <div>
      <div className="eventPickedUp"></div>
    </div>
  );
};

export default EventPickedUp;
