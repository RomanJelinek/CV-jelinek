import React, {useState, useEffect} from 'react';
import "./Homepage.css"
import Chatbot from "./chatbot/Chatbot";
import CV from "./cv/CV"
import html2canvas from "html2canvas";

const Homepage = () => {

const [printVersion, setPrintVersion] = useState(true);
const [cvItems, setCvItems] = useState([])
const [showChatbot, setShowChatbot] = useState(true)
const [userInfo, setUserInfo] = useState([])
const [cvColor, setCvColor] = useState([])


// getting chatbot data from local storage
useEffect(() => {
  let user = JSON.parse(window.localStorage.getItem("userData"));
  if (user) {
    let userObject = {
      userName: "",
      userCompany: "",
    };
    setShowChatbot(false);
    setCvItems(user.itemsToShow);
    userObject.userName = user.userName;
    userObject.company = user.company;
    setUserInfo(userObject);
  }
}, [showChatbot, []]); // I am setting this state in the Chatbot.js component


// Preparing a download button (copied code)
const liftData = (data) => {
  setShowChatbot(data)
}

const liftColor = (color) => {
  setCvColor(color);
};

useEffect(() => {
  document.getElementById("download-cv").addEventListener("click", function () {
    html2canvas(document.querySelector(".cv-container")).then(function (
      canvas
    ) {
      saveAs(canvas.toDataURL(), "RomanJelinekCV.png");
    });
  });

  function saveAs(uri, filename) {
    var link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  console.log(cvColor)

}, [])
///////  

    return (
      <div className="homepage">
        <p className="homepage-top-text">{userInfo.userName}, bellow, you will find my CV which you can print with the button bellow the CV.</p>
        {showChatbot && <Chatbot liftData={liftData}/>}
         {!showChatbot && <CV userInfo={userInfo} liftColor={liftColor}/>}
         <div id="download-cv" style={{backgroundColor: (cvColor.length === 0 || cvColor === "white") ? "black" : cvColor, color: "white"}}>Download CV to print</div> 
        </div>
    );
};

export default Homepage;