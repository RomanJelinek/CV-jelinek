import React from 'react';
import "./Modal.css"

const ModalOverlay = (props) => {
    return (
        <>
        <div className="modalOverlay">
            {props.children}
        </div>
        </>
    );
};

export default ModalOverlay;