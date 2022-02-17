import React, {useContext} from 'react';
import Card from "./Card"
import BackLayout from './BackLayout';


const Background = (props) => {


    return (
      <div>
        <BackLayout>
          <Card> About me </Card>
          <Card> My projects </Card>
          <Card> Timeline </Card>
        </BackLayout>
      </div>
    );
};

export default Background;