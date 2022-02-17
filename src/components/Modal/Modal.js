import React from 'react';
import ReactDOM from "react-dom"
import "./Modal.css"
import Backdrop from "./Backdrop"
import ModalOverlay from "./ModalOverlay"

const portalElement = document.querySelector("#overlays");

const Modal = (props) => {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </>
    );
};

export default Modal;