import SwitchDarkMode from "./SwitchDarkMode";
import "./Game.css";
import SwitchViewProvider from "../context/SwitchViewProvider";
import React, { useState, useEffect } from "react";
import TimeLine from "./timeline/TimeLine";
import useSound from "use-sound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const onSwitch = (data) => {
    setDarkMode(data);
  };

  return (
    <>
        <SwitchViewProvider getSwitch={darkMode}>
          <div className={darkMode ? "backgroundDark" : "backgroundLight"}>
            <SwitchDarkMode getSwitch={onSwitch} />
            <TimeLine />
          </div>
        </SwitchViewProvider>
    </>
  );
}

export default App;
