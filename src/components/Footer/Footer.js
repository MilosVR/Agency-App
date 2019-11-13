import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-about'>
                        <h2>ABOUT</h2>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from DevOps along the information highway.</p>
                        <div className='footer-social-icons'>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className='footer-contact'>
                        <h2>CONTACT INFO</h2>
                        <div>
                            <i class="fas fa-map-marked-alt"></i>
                            <p>Pancevo, Milke Markovic 6</p>
                        </div>
                        <div>
                            <i class="fas fa-phone"></i>
                            <p>(+123) -124 -1234</p>
                        </div>
                        <div>
                            <i class="far fa-envelope"></i>
                            <p>mecazavod@gmail.com</p>
                        </div>
                        <div>
                            <i class="fab fa-viber"></i>
                            <p>+5128524223</p>
                        </div>
                        <div>
                            <i class="far fa-clock"></i>
                            <p>10:00 - 19:00</p>
                        </div>
                    </div>
                    <div className='footer-services'>
                        <h2>SERVICES</h2>
                        <div className='footer-services-item'>
                            <i class="fas fa-angle-right"></i>
                            <p>Project Management</p>
                        </div>
                        <div className='footer-services-item'>
                            <i class="fas fa-angle-right"></i>
                            <p>Strategy Development</p>
                        </div>
                        <div className='footer-services-item'>
                            <i class="fas fa-angle-right"></i>
                            <p>Risk Management</p>
                        </div>
                        <div className='footer-services-item'>
                            <i class="fas fa-angle-right"></i>
                            <p>Finance Management</p>
                        </div>
                        <div className='footer-services-item'>
                            <i class="fas fa-angle-right"></i>
                            <p>Business Development</p>
                        </div>

                    </div>
                    <div className='footer-newsletter'>
                        <h2>SIGN UP NEWSLETTER</h2>
                        <form>
                            <input type='text' placeholder='Enter Your Email' />
                            <input type='submit' value='Subscribe'/>
                        </form>
                        <p>Sign up newsletter for getting latest news updates regularly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
