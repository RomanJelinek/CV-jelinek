import React from 'react';

const cvHobbies = (props) => {
    return (
      <>
        <h2
          style={{
            color:
              props.selectedColor === 'white' ? 'black' : props.selectedColor,
          }}
        >
          Hobbies
        </h2>
        <p>
          Apart from coding, I&nbsp;really enjoy cooking. Whenever I&nbsp;have
          some free time, I&nbsp;try to engage in sports. Recently, my wife and
          I&nbsp;welcomed our first son, who has become my biggest hobby. We
          also built a&nbsp;house, and I&nbsp;love growing various plants in our
          garden and having barbecues.
        </p>
      </>
    );
};

export default cvHobbies;