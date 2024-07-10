import React, {useState, useEffect} from 'react';
import "./Homepage.css"
import Chatbot from "./chatbot/Chatbot";
import CV from "./cv/CV"
import html2canvas from "html2canvas";

const Homepage = () => {
  const [cvItems, setCvItems] = useState([]);
  const [showChatbot, setShowChatbot] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

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
  }, [showChatbot]); // I am setting this state in the Chatbot.js component
  console.log(showChatbot)

  const liftData = (data) => {
    setShowChatbot(data);
  };

  const resetDataHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  // Preparing a download button (copied code)
  useEffect(() => {
    document
      .getElementById("download-cv")
      .addEventListener("click", function () {
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
  }, []);
  ///////

  return (
    <>
      <div className="homepage">
        {showChatbot && (
          <Chatbot liftData={liftData} setShowChatbot={setShowChatbot} />
        )}
        {!showChatbot && (
          <>
            <div className="top-links">
              <a onClick={resetDataHandler}>Reset CV data</a>
              <a href="/timeline">Do you prefer a playful introducion?</a>
            </div>
            <p className="homepage-top-text">You will find my CV bellow.</p>
            {!isMobile && (
              <p className="homepage-top-text">
                If you want, you can print it with the button on the bottom of
                the page.
              </p>
            )}
            <CV userInfo={userInfo} cvItems={cvItems} />
          </>
        )}
        <div
          id="download-cv"
          style={{
            backgroundColor: '#FFD700',
            color: 'black',
            visibility: !showChatbot ? 'visible' : 'hidden',
          }}
        >
          {!isMobile ? (
            <>Download CV to print</>
          ) : (
            <>If you want to download the CV, please open the site on desktop</>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;