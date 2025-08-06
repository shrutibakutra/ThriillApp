import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./contactdetails.scss"

const ContactDetails = () => {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <div className="contact-details">
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Welcome to the Thriill App!</ModalHeader>
                <ModalBody>
                    <p>
                        Looking for a fun way to study music theory? Try our app on <a href="https://play.google.com/store/apps/details?id=com.thriill.app">Android</a> today, or join the iOS waiting list and be the first to know when it drops!
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/1C4iWXxp46an5YpNxrlLVMiTYjlfpFtCqF2ZX-u1gwG8/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        Join our waitlist
                    </a>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ContactDetails;
