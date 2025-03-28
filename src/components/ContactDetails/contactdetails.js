import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./contactdetails.scss"

const ContactDetails = () => {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <div className="contact-details">
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Join Our Global Music Community</ModalHeader>
                <ModalBody>
                    <p>
                        We are building a vibrant community of music students and teachers from all around the world. If you're a student looking to learn or a teacher eager to share your knowledge, we'd love to connect with you!
                    </p>
                    <p>
                        Please take a moment to fill out our form and become a part of this exciting network.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/1wKEh43BoaYEqasm2VJo4Cjb6jBrzEvqDKqJurs9bdSA/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                    >
                        Join Us Now
                    </a>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ContactDetails;
