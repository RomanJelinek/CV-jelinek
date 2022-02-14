import React from 'react';

const CvExperience = (props) => {
    return (
      <div className="cv-experience-container">
        <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Experience</h2>
        <h3>Nasemista.cz</h3>
        <p>This is the web app that wasn't made by me. I mention this website as a reference because I learnt a lot throught ori </p>
        <h3>Stkpisek.cz</h3>
        <p> since the 15It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3>Webjelinek.cz</h3>
        <p>r since the 1500s, when an unknown prk. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    );
};

export default CvExperience;