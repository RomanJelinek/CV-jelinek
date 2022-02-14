import React from 'react';

const cvHobbies = (props) => {
    return (
    <>
        <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Hobbies</h2>
        <p>This is the web app that wasn't made by me. I mention this website as a reference because I learnt a lot throught ori </p>
    </>
    );
};

export default cvHobbies;