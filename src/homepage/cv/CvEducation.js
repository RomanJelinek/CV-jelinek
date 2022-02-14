import React from 'react';

const CvEducation = (props) => {
    return (
        <div className="cv-experience-container">
            <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Education</h2>
            <h3>SPŠ a VOŠ Písek</h3>
            <p>IT and Electrical engineering - Completed by graduation exam </p>
            <h3>VŠTE Budweis</h3>
            <p>Economic and management - Completed by bachelor degree</p>
      </div>
    );
};

export default CvEducation;