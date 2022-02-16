import React from 'react';
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoFirebase } from "react-icons/io";
import { GrReactjs, GrGithub } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import {RiEnglishInput} from "react-icons/ri"
import {SiFirebase} from "react-icons/si"

const CvMainText = (props) => {
    return (
      <div
        className="cv-main-container"
        style={{
          background: props.selectedColor,
          color: props.selectedColor === "white" && "black",
        }}
      >
        <div className="cv-main-profile-picture"></div>
        <p className="cv-main-name">Roman Jelínek</p>
        <div className="cv-main-basic">
          <a
            href="tel:731-799-162"
            style={{ color: props.selectedColor === "white" && "black" }}
          >
            +420 731 799 162
          </a>
          <a
            href="mailto:roman.jelinek91@gmail.com"
            style={{ color: props.selectedColor === "white" && "black" }}
          >
            roman.jelinek91@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/roman-jelinek91/"
            style={{ color: props.selectedColor === "white" && "black" }}
          >
            LinkedIN - roman-jelinek91
          </a>
        </div>
        <div className="cv-main-skills">
          <li><IoLogoHtml5 /></li>
          <li><IoLogoCss3 /></li>
          <li><IoLogoJavascript /></li>
          <li><GrReactjs /></li>
          <li><GrGithub /></li>
          <li><SiFirebase /></li>
        </div>
        <div className="cv-main-story">
          <p>
            Hi I am Roman and I am about to become a web developer. Since I
            have burned all bridges, there are no other options for me (which was meant so).
          </p>
          <p>
          I used to work as an online marketing specialist for about 5 years. But over
          time I realized it is not something I want to do in the future. So I founded a
          company with my former colleagues.
          </p>
          <p>
          We paid for the web app and started to sell custom print products.
          Over time we realized we would like to add new features to our web and
          that's when my coding journey begins...
          </p>
        </div>
      </div>
    );
};

export default CvMainText;