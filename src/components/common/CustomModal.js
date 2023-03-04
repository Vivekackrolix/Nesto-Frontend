import { Modal } from "react-bootstrap";
import "./CustomModal.css";

const CustomModal = ({ show, title, children }) => {
  return (
    <Modal show={show} centered size="md" className="login__page__modal">
      <Modal.Header className="border-0 justify-content-center p2-4 pb-0">
        <Modal.Title className="fw-bold display-6">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-2 px-5 pb-4">{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
