import React from 'react';

const cvHobbies = (props) => {
    return (
    <>
        <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Hobbies</h2>
        <p>Appart from coding I really like cooking. When I have time I try to do sports a bit. In the summer we are expecting our first son with my wife so I guess there is another hobby coming :)</p>
    </>
    );
};

export default cvHobbies;