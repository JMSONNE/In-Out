import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

export const Footer = () => {

    // Handle social media icons
    const facebook = "https://www.facebook.com/profile.php?id=100054282081055";

    return (
        <>
            <div className='footer'>
                <div className="footer-content">
                    <div className="copyright">
                        <div className='footer-text'>© 2024 - In & Out Cuts</div>
                    </div>
                    <div className="social-icons">
                        <IconButton
                            href={facebook}>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}
