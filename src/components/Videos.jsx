import React from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'

function Videos() {
  return (
    <>
    <div className='border border-3 rounded-1 border-warning-subtle  shdow p-5 mb-3'>
        <Row>
            <Col>
                <VideoCard />
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Videos