import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid pe-4'>
        <button className='btn btn-success ' onClick={handleShow}>Add Category</button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add Category
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="cid" label="Category ID" className="mb-3">
              <Form.Control type="number" placeholder="123" />
            </FloatingLabel>
            <FloatingLabel controlId="cname" label="Category Name" className="mb-3">
              <Form.Control type="text" placeholder="name" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success">Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Category