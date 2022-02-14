import React from 'react';

const cvHobbies = (props) => {
    return (
    <>
        <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Hobbies</h2>
        <p>Appart of coding I really like to cook good stuff. When I have time I try to sport a bit. In the summer we are expecting a son with my wife so I guess there is another hobby coming :)</p>
    </>
    );
};

export default cvHobbies;