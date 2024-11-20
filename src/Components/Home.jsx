import React from 'react'
import storePic from '../../public/store-front.jpg'
import awardPic from '../../public/award-pic.jpg'


const Home = () => {
    return (
        <>
            <section className='main-page'>


                {/* About us section */}
                <div className="banner-container">
                    <div className="banner">
                        <h1 className="banner-text">About us</h1>
                    </div>
                </div>

                {/* About us content */}
                <div className='about-us-content'>
                    <img src={storePic}
                        alt="In & Out Cuts"
                        className="homepage-image"
                    />
                    <p className="about-us-text">
                        Welcome to In & Out Cuts! Since 2015, we've been striving to be your local spot for stylish cuts and personalized service!
                        Located in the heart of Springtown Texas, Our talented team combines small-town warmth with the latest trends, offering a friendly,
                        relaxing environment where everyone feels at home. Come in for a fresh look – we can’t wait to make your hair dreams a reality!
                    </p>
                </div>


                {/* Awards section */}
                <div className="banner-container">
                    <div className="banner" style={{ marginTop: '1rem' }}>
                        <h1 className="banner-text">Awards</h1>
                    </div>
                </div>

                {/* Awards content */}

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '1rem'

                }}>
                    <p className="about-us-text">
                        We've been recognized as the best!
                    </p>
                </div>

                <div className='award-content'>

                    <img
                        className='homepage-image'
                        src={awardPic}
                        alt="Award photo" />

                    <ul className='award-list' type="square">
                        <li>2021 Best of Parker County</li>
                        <li>2020 Best of Parker County</li>
                        <li>2018 Best of Parker County</li>
                    </ul>
                </div>

                {/* Contact section */}
                <div className="banner-container" style={{ marginTop: '1rem' }}>
                    <div className="banner">
                        <h1 className="banner-text">Give us a call!</h1>
                    </div>
                </div>

                {/* Contact us content */}
                <div className="contact-us">
                    <div className="box">
                        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Hours of operation:</h1>
                        <ul type='none'>
                            <li>Monday:   10AM - 6PM</li>
                            <li>Tuesday:   10AM - 6PM</li>
                            <li>Wednesday:   10AM - 6PM</li>
                            <li>Thursday:   10AM - 6PM</li>
                            <li>Friday:   10AM - 6PM</li>
                            <li>Saturday:   CLOSED</li>
                            <li>Sunday:   CLOSED</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact:</h1>
                        <ul type='none'>
                            <li style={{ marginBottom: '1rem' }}>Phone: (682) 615-7235</li>
                            <li style={{ marginBottom: '1rem' }}>Address: 113 E 1st St, Springtown, TX</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home;

