import React from 'react';

const CvOtherExperience = (props) => {
    return (
       <div className="cv-experience-container">
            <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Other experience and skills</h2>
            <h3>Online marketing</h3>
            <p>I used to work as an online marketing specialist so I have a pretty good feeling for UI, I know SEO and advertising systems of Google, Seznam or Facebook.</p>
      </div>
    );
};

export default CvOtherExperience;