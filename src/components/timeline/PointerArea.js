import React, { useState, useContext, useEffect } from "react";
import SwitchViewContext from "../../context/SwitchViewContext";
import Pointer from "./Pointer";
import "./TimeLine.css";
import Event1 from "./Event1";
import EventPickedUp from "./EventPickedUp";
import TextRight from "./TextRight";
import TextLeft from "./TextLeft";
import prumyslovka from "../../img/prumyslovka.jpeg";
import lvlUp from "../../sound/lvlUp.mp3";
import useSound from "use-sound";



const events = [150, 300, 450, 600, 750];

const PointerArea = () => {
  const [pointer, setPointer] = useState(0);
  const darkMode = useContext(SwitchViewContext);
  const [playLvlUp] = useSound(lvlUp);

   useEffect(() => {
     for (let x = 0; x < events.length; x++) {
       if (pointer === events[x]) {
         playLvlUp();
       }
     }
   }, [pointer]);


  const pointerPosition = (position) => {
    setPointer(position);
  };

 
  return (
    <div className="timeline">
      <div className={"area"}>
        <div className="areaHorizontal"></div>
        <Pointer whereIsPointer={pointerPosition} />
        {pointer < events[0] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[0] === pointer && (
          <TextRight
            text={
              "V roce 2012 jsem vystudoval střední průmyslovou školu v Písku "
            }
            img={prumyslovka}
          />
        )}
        {pointer < events[1] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[1] === pointer && <TextLeft />}
        {pointer < events[2] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[2] === pointer && (
          <TextRight
            text={
              "Po vysoké škole jsem se přestěhoval do Prahy, kde jsem začal pracovat jako broker"
            }
          />
        )}
        {pointer < events[3] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[3] === pointer && <TextLeft />}
        {pointer < events[4] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}

        <div className="areaHorizontalFinish"></div>
        {events[4] === pointer && (
          <TextLeft
            text={
              "Po vysoké škole jsem se přestěhoval do Prahy, kde jsem začal pracovat jako broker"
            }
          />
        )}
      </div>
    </div>
  );
};

export default PointerArea;
