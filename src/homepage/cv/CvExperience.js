import React from 'react';

const CvExperience = (props) => {
    return (
      <div className="cv-experience-container">
        <h2 style={{color: props.selectedColor === "white" ? "black" : props.selectedColor}}>Experience</h2>
        <h3>Nasemista.cz</h3>
        <p>This is the web app that wasn't made by me. I mention this website as a reference because I was guided by the author so I learnt to orient in Laravel environment, how to use Git and GitHub and after some time I was able to add new features like modals or slider which changes colors of the icons. With the backend assitence of the author I also added new currencies and upsell products.</p>
        <h3>Stkpisek.cz</h3>
        <p>This project is made completely by me. As a backend and database I use Firebase. There is an authentication passed to the components throught the Context hook. The admin section is protected by a component ProtectedRoute which checks whether user exists. In the admin section there is a possibility do add new posts which appear on the homepage. The website has also dynamic calendar which shows when the company closes and when opens again depending on time, day of the week or holiday. For the holiday check I fetch data from API. I also made a copy of this website on the addres Stkmilevsko.cz which falls under one company</p>
        <h3>Webjelinek.cz</h3>
        <p>This website includes 2 parts. The first one is called timeline and can be found on webjelinek/timeline. It is my very first project and it works fine but the code is complicated and unnecessarily long. I didn't remake the code so there can be seen my progress. Also now I know the code has to be written organized and clean. The second part is the website you probably went throught and generated this CV. It saves an inputs in the local storage and then uses data on creating the CV. I also collect UTM parameters from a link if there are any. For the download CV I use Html2canvas.</p>
      </div>
    );
};

export default CvExperience;