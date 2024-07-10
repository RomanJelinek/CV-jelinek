import React from 'react';
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
} from 'react-icons/io';
import { GrReactjs, GrGithub } from 'react-icons/gr';
import { SiFirebase, SiNextdotjs, SiTypescript } from 'react-icons/si';



const CvMainText = (props) => {
  return (
    <div
      className="cv-main-container"
      style={{
        background: props.selectedColor,
        color: props.selectedColor === 'white' && 'black',
      }}
    >
      <div className="cv-main-profile-picture"></div>
      <p className="cv-main-name">Roman Jelínek</p>
      <div className="cv-main-basic">
        <a
          href="tel:731-799-162"
          style={{ color: props.selectedColor === 'white' && 'black' }}
        >
          +420 731 799 162
        </a>
        <a
          href="mailto:roman.jelinek91@gmail.com"
          style={{ color: props.selectedColor === 'white' && 'black' }}
        >
          roman.jelinek91@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/roman-jelinek91/"
          style={{ color: props.selectedColor === 'white' && 'black' }}
        >
          LinkedIN - roman-jelinek91
        </a>
      </div>
      <div className="cv-main-skills">
        <li>
          <IoLogoHtml5 />
        </li>
        <li>
          <IoLogoCss3 />
        </li>
        <li>
          <IoLogoJavascript />
        </li>
        <li>
          <GrReactjs />
        </li>
        <li>
          <GrGithub />
        </li>
        <li>
          <SiFirebase />
        </li>
        <li>
          <SiNextdotjs />
        </li>
        <li>
          <SiTypescript />
        </li>
      </div>
      <div className="cv-main-story">
        <p>
          Hi, I my name is Roman, I am 32 and I&nbsp;have been working as a&nbsp;web
          developer for the past 2.5&nbsp;years. During this time, I&nbsp;have
          gained valuable experience and am now seeking a&nbsp;new challenge in
          my career.
        </p>
        <p>
          Previously, I&nbsp;worked as an online marketing specialist for about
          5&nbsp;years. However, I&nbsp;realized that this was not my true
          passion. Along with my former colleagues, I&nbsp;co-founded
          a&nbsp;company where we paid for the development of a&nbsp;web
          application to sell custom print products. As our business grew, we
          wanted to add new features to our website, which sparked my interest
          in coding. This marked the beginning of my journey as a&nbsp;web
          developer.
        </p>
      </div>
    </div>
  );
};

export default CvMainText;
