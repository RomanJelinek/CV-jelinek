import React from "react";
import Modal from "../Modal/Modal";
import "./WelcomeModal.css"

const WelcomeModal = (props) => {


  return (
    <>
      <Modal>
        <div className="welcomeModalContent">
          <h1>Welcome to my CV!</h1>
          <p>
            My name is Roman Jelínek and I have created this website in order to
            introduce myself in a creative way.
          </p>
          <p>
            The entire website is built in React framework and is my first
            project in React.
          </p>
          <p>Now, how to navigate throught the "game": </p>
          <p>PC users: use keyboard arrow keys ◄ ▼ ►</p>
          <p>Mobile users: click on arrow next to a character</p>
          <button onClick={props.hideWelcomeModal}>START</button>
        </div>
      </Modal>
    </>
  );
};

export default WelcomeModal;
