import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Category from '../components/Category'
import Videos from '../components/Videos'
import { Link } from 'react-router-dom'

function Home() {
const [response,setResponse]=useState("")
const [username,setUsername]=useState("")

useEffect(()=>{
  const user=JSON.parse(sessionStorage.getItem('userData'))
  setUsername(user?.username)
},[])

  return (
    <>
      <h1>WELCOME {username}</h1>
      <div className='d-flex justify-content-between p-4'>
        <h1>Videos</h1>
        <Link to={'/his'}>WATCH HISTORY</Link>
      </div>
       <div>
        <Row>
          <Col sm={12} md={1}>
            <Addvideo response={setResponse}/>
          </Col>
          <Col sm={12} md={8}>
            <Videos resp={response}/>
          </Col>
          <Col sm={12} md={3}>
            <Category/>
          </Col>
        </Row>
       </div>
    </>
  )
}

export default Home