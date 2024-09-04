import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'

function Header() {

  const nav=useNavigate()

  const logout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }

  return (
    <>
        <Navbar className="bg-success">
            <Container >
                <Navbar.Brand href="#home">
                <i className="fa-solid fa-circle-play fa-beat bg-danger" style={{color:"gold",border:'solid 1px green',borderRadius:'180%'}}></i>
                    {' '} 
                    <b className='text-primary fs-4'>Media Player</b>
                </Navbar.Brand>
            </Container>
            <button className='btn btn-danger border me-3' onClick={logout}>Logout</button>
        </Navbar>
    </>
  )
}

export default Header;
