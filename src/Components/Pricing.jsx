import React from 'react'
import logo from '../assets/logo.jpg'
import tessapic from '../assets/tessapic.jpg'
import tammypic from '../assets/tammypic.jpg'
import katiepic from '../assets/katiepic.jpg'

export const Pricing = () => {
    return (
        <section className='pricing-page'>
            <div className="stylist-section">

                {/* Tessa */}
                <section className="stylist-info">
                    <h2 className="stylist-name">Tessa</h2>
                    <div className="flex-wrapper">
                        <img
                            src={tessapic}
                            alt="Tessa"
                            className="avatar" />
                        <ul className='stylist-pricing'>
                            <li>Kids - $15.00 and up</li>
                            <li>Men's - $20.00 and up</li>
                            <li>Women's - $20.00 and up</li>
                            <li>Senior's - $15.00 and up</li>
                            <li>Perms - $70.00 and up</li>
                            <li>Highlights partial - $100</li>
                            <li>Highlights - $140 and up</li>
                        </ul>
                    </div>
                </section>

                {/* Tammy */}
                <section className="stylist-info">
                    <h2 className="stylist-name">Tammy</h2>
                    <div className="flex-wrapper">
                        <img
                            src={tammypic}
                            alt="Tammy"
                            className="avatar" />
                        <ul className='stylist-pricing'>
                            <li>Kids - $15.00 and up</li>
                            <li>Men's - $20.00 and up</li>
                            <li>Women's - $20.00 and up</li>
                            <li>Partial Highlights - $100</li>
                            <li>Highlights - $130 and up</li>
                            <li>Color - $95 and up</li>

                        </ul>
                    </div>
                </section>

                {/* Katie */}
                <section className="stylist-info">
                    <h2 className="stylist-name">Katie</h2>
                    <div className="flex-wrapper">
                        <img
                            src={katiepic}
                            alt="Katie"
                            className="avatar" />
                        <ul className='stylist-pricing'>
                            <li>Kids - $15.00 and up</li>
                            <li>Men's - $20.00 and up</li>
                            <li>Women's - $20.00 and up</li>
                            <li>Senior's - $15.00 and up</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}
