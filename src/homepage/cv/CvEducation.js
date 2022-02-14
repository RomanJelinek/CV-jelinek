import React from 'react';

const CvEducation = (props) => {
    return (
        <div className="cv-experience-container">
            <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Education</h2>
            <h3>SPŠ a VOŠ Písek</h3>
            <p>This is the web app that wasn't made by me. I mention this website as a reference because I learnt a lot throught ori </p>
            <h3>VŠTE Ceske Budejovice</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
      </div>
    );
};

export default CvEducation;