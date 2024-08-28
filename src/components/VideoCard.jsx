import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" src="https://i.ytimg.com/vi/xUe3eR0n380/maxresdefault.jpg" />
          <Card.Body>
            <Card.Title>Thoofan</Card.Title>
            <Button variant="btn">
                <i className="fa-solid fa-trash-can" style={{color: "#e60505"}} />
            </Button>
          </Card.Body>
        </Card>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thoofan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/xUe3eR0n380?si=wtKYRrCYKoJdOGLp&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard