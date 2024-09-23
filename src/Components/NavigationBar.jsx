import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

export const NavigationBar = () => {

    // Handle navigating
    const navigate = useNavigate();

    // When logo/brand image is clicked, navigate to home page
    const handleBrandClick = () => {
        navigate('/');
        console.log("Navigated to '/'");
    };

    // Handle navigating to pricing page
    const handlePricingClick = () => {
        navigate('/pricing');
        console.log("Navigated to pricing");
    };

    // Gets window size and assigns it to a variable to use for drop down menu
    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        useEffect(() => {
            const handleResize = () => {
                setWindowDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    };

    const windowDimensions = useWindowDimensions();

    const dropdownMenu = () => {
        return windowDimensions.width <= 425;
    };

    // Handles drop down menu logic
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navbar className='nav-bar'>
            {/* Brand and logo button */}
            <Container>
                <div onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
                    <Navbar.Brand className='brand'>
                        <img
                            src='/src/assets/logo.jpg'
                            alt="logo"
                            className='brandImage'
                        />
                        <h2 className='brand-text'>In & Out Cuts</h2>
                    </Navbar.Brand>
                </div>
            </Container>

            {/* Buttons */}
            <Container>
                {/* Pricing */}
                <div style={{ cursor: 'pointer' }}>
                    {dropdownMenu() ? (
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleClick}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => { handlePricingClick(); handleClose(); }}>Pricing</MenuItem>
                            </Menu>
                        </Toolbar>
                    ) : (
                        <h2 onClick={handlePricingClick} className='brand-text'>Pricing</h2>
                    )}
                </div>
            </Container>
        </Navbar>
    );
};

