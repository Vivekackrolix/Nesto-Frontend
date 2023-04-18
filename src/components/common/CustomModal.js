import { Button, Modal } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';
import './CustomModal.css';

const CustomModal = ({
  show,
  title,
  children,
  onHide,
  closeBtn,
  cssClassName,
  size,
  modalHeader,
}) => {
  return (
    <Modal
      show={show}
      centered
      size={size ? size : `md`}
      className={`login__page__modal ${cssClassName ? cssClassName : ``}`}
    >
      {!modalHeader && !closeBtn && (
        <>
          <Modal.Header className="p-2 border-0">
            <Modal.Title className="fw-bold display-6">
              {title ? title : ``}
            </Modal.Title>
          </Modal.Header>
        </>
      )}

      {modalHeader && closeBtn && (
        <>
          {!closeBtn && (
            <Modal.Header className="justify-content-center p-2 border-0">
              <Modal.Title className="fw-bold display-6">
                {title ? title : ``}
              </Modal.Title>
            </Modal.Header>
          )}
          {closeBtn && (
            <Modal.Header
              className={`align-items-center p-2  ${
                title ? `` : 'border-0'
              }`}
            >
              <Modal.Title className="fw-bold d-flex align-items-center">
                {title ? title : ``}
              </Modal.Title>
              <Button
                className="ms-auto bg-transparent p-0 custom__modal__close rounded rounded-circle"
                onClick={onHide}
              >
                <FiX size={20} color="#b5b5b5" />
              </Button>
            </Modal.Header>
          )}
        </>
      )}

      <Modal.Body className="p-3">{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
