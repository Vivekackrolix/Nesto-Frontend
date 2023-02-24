import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, title, children }) => {
  return (
    <Modal show={show} centered size="md">
      <Modal.Header className="border-0 justify-content-center">
        <Modal.Title className="fw-bold display-6">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-2 px-5 pb-4">{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
