import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './FileUpload.css';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = event => {
    event.preventDefault();
    const fileList = Array.from(event.dataTransfer.files);
    setFiles([...files, ...fileList]);
  };

  const handleFileInputChange = event => {
    const fileList = Array.from(event.target.files);
    setFiles([...files, ...fileList]);
  };

  return (
    <Container className="profile-upload">
      <Row>
        <Col className="d-flex flex-wrap gap-3">
          {!!files.length > 0 && (
            <ul className="list-unstyled d-flex gap-3">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={`/assets/upload/${file.name}`} alt={file.name} />
                </li>
              ))}
            </ul>
          )}
          <Form
            className="position-relative"
            onDragOver={event => event.preventDefault()}
            onDrop={handleDrop}
          >
            <Form.Group controlId="formFileMultiple" className="mb-3">
              {/* <Form.Label>
                Drag and drop files or{' '}
                <span className="upload-link color-blue">browse</span>
              </Form.Label> */}
              <Form.Control
                type="file"
                multiple
                onChange={handleFileInputChange}
              />
              <div className="drag-drop-text">
                <span>Drag and drop files or</span>{' '}
                <span className="upload-link color-blue">browse</span>
                <p>Supported formats: JPEG, PNG</p>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUpload;
