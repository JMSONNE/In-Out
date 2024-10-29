import React from 'react'


const Home = () => {
    return (
        <>
            <section className='main-page'>
                {/* About us section */}
                <div className="banner">
                    <h1 className="banner-text">About us</h1>
                </div>

                {/* About us content */}
                <div className='about-us-content'>
                    <img src='/store-front.png'
                        alt="In & Out Cuts"
                        className="homepage-image"
                    />
                    <p className="about-us-text">
                        Walk-ins welcome, come see us for all of your hair care needs. Just ask for Tammy, Tessa, katie or Andrea.
                    </p>
                </div>

                {/* Awards section */}
                <div className="banner" style={{ marginTop: "5rem" }}>
                    <h1 className="banner-text">Awards</h1>
                </div>

                {/* Awards content */}
                <div className='award-content'>
                    {/* <img src="" alt="" /> */}
                    <ul className='award-list' type="square">
                        <li>award date</li>
                        <li>award date</li>
                        <li>award date</li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default Home;

