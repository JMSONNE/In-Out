import React from 'react'


const Home = () => {
    return (
        <>
            <section className='main-page'>
                {/* About us section */}
                <div className="about-us-banner">
                    <h1 className="about-us-banner-text">About us</h1>
                </div>

                {/* About us content */}
                <div className='about-us-content'>
                    <img src="src\assets\store-front.png"
                        alt="In & Out Cuts"
                        className="homepage-image"
                    />
                    <p className="about-us-text">
                        Walk-ins welcome, come see us for all of your hair care needs. Just ask for Tammy, Tessa, katie or Andrea.
                    </p>
                </div>

            </section>
        </>
    )
}

export default Home;

