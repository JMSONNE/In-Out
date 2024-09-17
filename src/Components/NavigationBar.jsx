import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';


export const NavigationBar = () => {
    return (
        <>

            <Navbar className='nav-bar'>
                <Container>
                    <Navbar.Brand href="/" className='brand'>
                        <img
                            src='\src\assets\logo.jpg'
                            alt="logo"
                            className='brandImage' />
                        In & Out Cuts
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}
