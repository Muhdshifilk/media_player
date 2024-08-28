import React from 'react'
import{Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='bg-dark py-2 container-fluid'>
            <Row className='p-5'>
                <Col sm={12} md={5}>
                    <h3 className='text-primary'>Media player 2024</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex sequi temporibus incidunt minus totam recusandae placeat laudantium nemo voluptate cumque, id officiis beatae fugit earum magnam. Laboriosam, natus voluptatibus.</p>
                </Col>
                <Col sm={12} md={2} style={{textAlign:'center'}}>
                    <h3>Links</h3>
                    <div className='d-flex flex-column'>
                        <Link className='link-primary' to={'/'}>Landing</Link>
                        <Link className='link-primary' to={'/home'}>Home</Link>
                        <Link className='link-primary' to={'/his'}>History</Link>
                    </div>
                </Col>
                <Col sm={12} md={5}>
                    <h3>Feedback</h3>
                    <textarea name="" id="" className='form-control'></textarea>
                    <button className='btn btn-info mt-3'>Send</button>
                </Col>
            </Row>
            <p className='text-center'>MEDIA PLAYER2024<small>©</small>All rights reserved</p>
        </div>

    </>
  )
}

export default Footer