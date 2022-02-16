import React, {useContext} from 'react';
import classes from "./BackLayout.module.css";
import SwitchViewContext from "../context/SwitchViewContext";



const BackLayout = (props) => {

const darkMode = useContext(SwitchViewContext)

return (
  <div>
    {darkMode && <div className={classes.blackContainer}>{props.children}</div>}
    {!darkMode && <div className={classes.whiteContainer}>{props.children}</div>}
  </div>
);

}


export default BackLayout


