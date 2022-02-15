import React, {useState} from 'react';
import CvMainText from "./CvMainText"
import "./Cv.css"
import CvExperience from "./CvExperience"
import CvEducation from "./CvEducation";
import CvHobbies from "./CvHobbies"
import CvOtherExperience from "./CvOtherExperience"


const CV = (props) => {

    const [selectedColor, setSelectedColor] = useState("black")
    const [selectedLayout, setSelectedLayout] = useState("left")

    const colors = ["#480c0c", "#0c0c48", "black", "white", "#420042", "#323131", "#746c00", "#a74758"]


    // getting selected color
    const colorHandler = (color) => {
        setSelectedColor(color)
        props.liftColor(color)
    }


    return (
      <>
        <div className="cv-color-options">
          {colors.map((color) => {
            return (
              <div
                className="cv-one-color-option"
                style={{
                  border: color === selectedColor && "2px solid yellow",
                  background: color,
                }}
                onClick={() => colorHandler(color)}
              ></div>
            );
          })}
        </div>
        <div className="cv-pick-layouts">
          <div
            className="cv-pick-one-layout cv-layout-one"
            onClick={() => {
              setSelectedLayout("left");
            }}
            style={{
              border: selectedLayout === "left" && "5px solid yellow",
            }}
          ></div>
          <div
            className="cv-pick-one-layout cv-layout-two"
            style={{
              border: selectedLayout === "right" && "5px solid yellow",
            }}
            onClick={() => {
              setSelectedLayout("right");
            }}
          ></div>
        </div>
        <div className="cv-container">
          {selectedLayout === "left" && (
            <CvMainText
              selectedColor={selectedColor}
              userInfo={props.userInfo}
            />
          )}
          <div className="cv-right-container">
            {props.cvItems.includes("CvExperience") && <CvExperience selectedColor={selectedColor} />}
            {props.cvItems.includes("CvOtherExperience") &&<CvOtherExperience selectedColor={selectedColor} />}
            {props.cvItems.includes("CvEducation") &&<CvEducation selectedColor={selectedColor} />}
            {props.cvItems.includes("CvHobbies") &&<CvHobbies selectedColor={selectedColor} />}
          </div>
          {selectedLayout === "right" && (
            <CvMainText
              selectedColor={selectedColor}
              userInfo={props.userInfo}
            />
          )}
          <div className="cv-main-signature" style={selectedLayout === "left" ? { right: "2vMin"} : {left:"2vMin"}}>
            CV generated for {props.userInfo.userName} {props.userInfo.company && <>from {props.userInfo.company}</> }
          </div>
        </div>
      </>
    );
};

export default CV;