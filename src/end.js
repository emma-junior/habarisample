import React from 'react'
import {FaGreaterThan} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const End = () => {
    return (
        <footer className='end'>
            <div className='end-first'>
                <div className='para'>
                    <p>On Habari, find a large catalogue of local and international songs, thousands of products at incredible prices.</p><p>Re-connect with old and new friends with more valuable ways to share, support or celebrate them. Have a personal wallet that can be used to send money, pay bills, buy airtime or save towards a big goal.</p>
                </div>
                <div className="modules">
                    <h5>HABARI MODULES</h5>
                    <div className="line"></div>
                    <ul className='module-link'>
                        <li className='module-links'><FaGreaterThan /> Play</li>
                        <li className='module-links'><FaGreaterThan /> Shop</li>
                        <li className='module-links'><FaGreaterThan /> Pay</li>
                        <li className='module-links'><FaGreaterThan /> Events</li>
                        <li className='module-links'><FaGreaterThan /> Chats</li>
                    </ul>
                </div>
            </div>
            <div className='end-second'>
                <div className="useful-links">
                    <h5>USEFUL LINKS</h5>
                    <div className="line"></div>
                    <ul className='module-link'>
                        <li className='module-links'><Link to='/'><FaGreaterThan /> Returns & Refunds</Link></li>
                        <li className='module-links'><Link to='/'><FaGreaterThan /> Shipping</Link></li>
                        <li className='module-links'><Link to='/'><FaGreaterThan /> Terms and Conditions</Link></li>
                        <li className='module-links'><Link to='/'><FaGreaterThan /> User's FAQ</Link></li>
                        <li className='module-links'><Link to='/'><FaGreaterThan /> Privacy policy</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h5>CONTACT US</h5>
                    <div className="line"></div>
                    <div>Lagos, Nigeria</div>
                    <div><b>Phone:</b> +2348157891175</div>
                    <div><b>Phone:</b> +2349058690714</div>
                    <div><b>Email:</b> care@habarigt.com</div>
                    <div><b>Email:</b> support@habarigt.com</div>
                    <br/>
                    <p><FaTwitter />  <FaFacebook /> <FaInstagram /> <FaInstagram /></p> 
                </div>
            </div>
        </footer>
    )
}

export default End
