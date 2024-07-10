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

const PointerArea = (props) => {
  const [pointer, setPointer] = useState(0);
  const [pointerHorizontally, setPointerHorizontally] = useState(50);
  const [mushroom, DeleteMushroom] = useState()
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

   const pointerPositionHorizontal = (positionHorizontal) => {
     console.log(positionHorizontal)
     setPointerHorizontally(positionHorizontal)
   };

 
  return (
    <div className="timeline">
      <div className={"area"}>
        <div className="areaHorizontal"></div>
        <Pointer whereIsPointer={pointerPosition} whereisPointerHorizontally={pointerPositionHorizontal} />
        {pointer < events[0] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[0] === pointer && (
          <TextRight
            text={
              "V roce 2012 jsem vystudoval střední průmyslovou školu v Písku, kde jsem poprvé přišel do styku s programováním. Nicméně tehdy mě to ještě nechytlo. "
            }
            img={prumyslovka}
          />
        )}
        {pointer < events[1] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[1] === pointer && <TextRight text={"Po střední škole jsem se tedy rozhodl, že nastoupím na Vysokou školu Technickou a Ekonomickou v Českých Budějovicích, kde jsem vystudoval marketing."} />}
        {pointer < events[2] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[2] === pointer && (
          <TextLeft
            text={
              "Po vysoké škole jsem se přestěhoval do Prahy, kde jsem absolvoval kurz online marketingu a začal pracovat pro agenturu Visibility Digital."}
          />
        )}
        {pointer < events[3] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}
        {events[3] === pointer && <TextLeft 
        text={"Po 5 letech práce jakožto online marketingový specialista jsem se rozhodl, že se naučím programovat. Začal jsem se tedy učit javascript."}/>}
        {pointer < events[4] ? (
          <Event1 />
        ) : (
          <EventPickedUp events={events} pointer={pointer} />
        )}

        <div className="areaHorizontalFinish"></div>
        {events[4] === pointer && (
          <TextLeft
            text={
              "Aktuálně pracuji jako front-end vývojář přes 2 roky a stále mě baví se vzdělávat a neustále se posouvat v tomto oboru."
            }
          />
        )}
      </div>
    </div>
  );
};

export default PointerArea;
