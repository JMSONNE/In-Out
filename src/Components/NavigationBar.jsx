import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';


export const NavigationBar = () => {

    // Handle navigating
    const navigate = useNavigate()

    // When logo/brand image is clicked, navigate to home page
    const handleBrandClick = () => {
        navigate('/');
        console.log("Navigated to '/'")
    }

    return (
        <>

            <Navbar className='nav-bar'>
                <Container>
                    <div onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
                        <Navbar.Brand className='brand'>
                            <img
                                src='\src\assets\logo.jpg'
                                alt="logo"
                                className='brandImage' />
                            <h2 className='brand-text'>In & Out Cuts</h2>
                        </Navbar.Brand>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}
