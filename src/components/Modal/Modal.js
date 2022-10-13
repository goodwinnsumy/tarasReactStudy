import React from 'react';
import Portal from "../Portal/Portal";
import "./Modal.scss"

const Modal = (props) => {

    const {text,closeHandler, action} = props


    return (
        <div className="modal-w">
            <Portal>
                {/*<div className="modal-wrapper" ></div>*/}
                <div className="modal-wrapper" onClick={closeHandler}></div>
                <div className="modal">
                    {text}
                    <div className="modal-btn">
                        <button className="btn" onClick={closeHandler}>Close</button>
                        {action}
                    </div>
                </div>
            </Portal>
        </div>
    );
};

export default Modal;