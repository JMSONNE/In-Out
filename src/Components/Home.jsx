import React from 'react'


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
                    <img src='/store-front.png'
                        alt="In & Out Cuts"
                        className="homepage-image"
                    />
                    <p className="about-us-text">
                        Welcome to In & Out Cuts, your local spot for stylish cuts, vibrant colors, and personalized service!
                        Located in the heart of Springtown, we’re passionate about making you look and feel your best.
                        Our talented team combines small-town warmth with the latest trends, offering a friendly,
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
                        We've been recognized as the best for a while now!
                    </p>
                </div>

                <div className='award-content'>

                    <img
                        className='homepage-image'
                        src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/217635115_4459259420752999_2850506802059342367_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Alxj59vQyBEQ7kNvgExxYun&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AlUDjNDax3yo08iyvpidWzH&oh=00_AYA2URXSJ_vdHk6xszvdn6aD0yK1o_cAKNHiFvXXT4LtWQ&oe=67343AB4"
                        alt="Award photo" />

                    <ul className='award-list' type="square">
                        <li>2021 Best of Parker County</li>
                        <li>2020 Best of Parker County</li>
                        <li>2018 Best of Parker County</li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default Home;

