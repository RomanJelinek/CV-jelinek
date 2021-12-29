import Background from "./components/Background";
import Switch from "./components/Switch";
import "./App.css";
import SwitchViewProvider from "./context/SwitchViewProvider";
import React, { useState, useEffect } from "react";
import TimeLine from "./components/timeline/TimeLine";
import useSound from "use-sound";
import BackgroundMusic from "./sound/backgroundMusic.mp3";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [music] = useSound(BackgroundMusic, { volume: 0.2 });

  useEffect(() => {
    music();
  },[]);

  const onSwitch = (data) => {
    setDarkMode(data);
  };

  return (
    <>
      <SwitchViewProvider getSwitch={darkMode}>
        <div className={darkMode ? "backgroundDark" : "backgroundLight"}>
          <Switch getSwitch={onSwitch} />
          <TimeLine />
          <p>ahoj</p>
        </div>
      </SwitchViewProvider>
    </>
  );
}

export default App;
