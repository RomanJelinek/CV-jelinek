import React, {useState} from 'react';
import SwitchViewContext from "./SwitchViewContext"

const SwitchViewProvider = (props) => {


  
    return (
      <>
        <SwitchViewContext.Provider value={props.getSwitch}>
          {props.children}
        </SwitchViewContext.Provider>
      </>
    );
};

export default SwitchViewProvider;