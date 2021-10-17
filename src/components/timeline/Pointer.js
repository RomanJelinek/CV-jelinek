import React, { useState, useEffect } from "react";
import "./TimeLine.css";
import useKeypress from "react-use-keypress";

const Pointer = (props) => {
  const [PointerPositionHorizontal, setPointerPositionHorizontal] = useState(-50);
  const [PointerPositionVertical, setPointerPositionVertical] = useState(50);


  const Portal = () => {
    if (PointerPositionHorizontal === 800 && PointerPositionVertical === 100) {
      setPointerPositionHorizontal(-50)
    }
  }
Portal()


  useKeypress(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], (event) => {
    if (
      event.key === "ArrowDown" &&
      PointerPositionHorizontal != 800 &&
      PointerPositionVertical === 0
    ) {
      setPointerPositionHorizontal(PointerPositionHorizontal + 50);
    }  else if (
      event.key === "ArrowLeft" &&
      (PointerPositionHorizontal === -50 || PointerPositionHorizontal === 800) &&
      PointerPositionVertical > 0
    ) {
      setPointerPositionVertical(PointerPositionVertical - 50);
    } else if (
      event.key === "ArrowRight" &&
      (PointerPositionHorizontal === 800 || PointerPositionHorizontal === -50) &&
      PointerPositionVertical < 100
    ) {
      setPointerPositionVertical(PointerPositionVertical + 50);
    }
  });


    props.whereIsPointer(PointerPositionHorizontal);

 

  const arrowLeft = () => {
       setPointerPositionVertical(PointerPositionVertical - 50);
     };

  const arrowRight = () => {
        setPointerPositionVertical(PointerPositionVertical + 50);
      };

  const arrowDown = () => {
    setPointerPositionHorizontal(PointerPositionHorizontal + 50);
  };

  const arrowUp = () => {
    if (PointerPositionHorizontal >= 1) {
      setPointerPositionHorizontal(PointerPositionHorizontal - 50);
    }
  };


  return (
    <div>
      <div
        className={`pointer ${
          PointerPositionHorizontal < 150 && "pointerChildhood"
        } ${PointerPositionHorizontal >= 150 && "pointerHighSchool"}
        ${PointerPositionHorizontal >= 300 && "pointerUniversity"}
        ${PointerPositionHorizontal >= 450 && "pointerMarketing"}
        ${PointerPositionHorizontal >= 600 && "pointerNow"}`}
        style={{
          top: PointerPositionHorizontal + "px",
          left: PointerPositionVertical + "px",
        }}
      >
        <div className={"arrowUp"} onClick={arrowUp}></div>
        <div className={"arrowDown"} onClick={arrowDown}></div>
        <div className={"arrowLeft"} onClick={arrowLeft}></div>
        <div className={"arrowRight"} onClick={arrowRight}></div>
      </div>
    </div>
  );
};

export default Pointer;
