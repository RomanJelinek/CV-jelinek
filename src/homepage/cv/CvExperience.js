import React from "react";

const CvExperience = (props) => {
  return (
    <div className="cv-experience-container">
      <h2
        style={{
          color:
            props.selectedColor === "white" ? "black" : props.selectedColor,
        }}
      >
        Experience
      </h2>
      <h3>Nasemista.cz</h3>
      <p>
        This is the web app that wasn't made by me. I am mentioning this website
        as a reference because I was guided by the website developer so I learnt
        to navigate in Laravel environment, to use Git and GitHub and after some
        time I was able to add new features like modals or slider which changes
        colors of the icons. With the backend assitence of the developer I also
        added new currencies and upsell products.
      </p>
      <h3>Stkpisek.cz</h3>
      <a href="https://github.com/RomanJelinek/STK-Pisek">
        github.com/RomanJelinek/STK-Pisek
      </a>
      <p>
        This project is made completely by me. As a backend and database I use
        Firebase. There is an authentication distributed to the components
        throught the Context hook. The admin section is protected by a component
        ProtectedRoute which checks whether the user exists. In the admin
        section there is a possibility do add new posts which appear on the
        homepage. The website also has a dynamic calendar which shows when the
        company closes and when it opens again depending on the time, day of the
        week or a public holiday. For the public holiday check I fetch data from
        API. I also made a copy of this website for the branch company
        Stkmilevsko.cz.
      </p>
      <h3>Webjelinek.cz</h3>
      <a href="https://github.com/RomanJelinek/CV-jelinek">
        github.com/RomanJelinek/CV-jelinek
      </a>
      <p>
        This website includes 2 parts. The first one is called timeline and can
        be found on webjelinek/timeline. It is my very first project and it
        works fine but the code is complicated and unnecessarily long. I didn't
        remake the code so my progress can be seen. The second part is the
        website which led you to this CV. It saves inputs in the local storage
        and then uses data to create the CV. I also collect UTM parameters from
        a link if there are any. To download the CV I use Html2canvas.
      </p>
    </div>
  );
};

export default CvExperience;
