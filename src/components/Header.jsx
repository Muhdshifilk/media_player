import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
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
        </Navbar>
    </>
  )
}

export default Header;
