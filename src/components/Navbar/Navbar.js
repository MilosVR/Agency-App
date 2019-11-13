import React, { Fragment } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import Search from '../Landing/Search/Search'

const Navbar = (props) => {
    return (
        <Fragment>
            <div className='navbar-header'>
                <div className='container navbar-header-working-time'>
                    <div className='navbar-header-icons'>
                        <div><i className="far fa-clock"></i>
                        {' '}Mon - Fri: 9AM - 7PM</div>
                        <div><i className="fas fa-map-marker-alt"></i>
                        {' '}Milke Markovic 6, Pancevo</div>
                    </div>
                    <div className='navbar-header-social'>
                        <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-github"></i>
                        </div>
                        <div className='navbar-links-register-login'>
                            <a>Login</a>
                            <span></span>
                            <a>Register</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar_body'>
                <div className='container flex-between'>
                    <div className='logo'>
                        <img src='/assets/logo.png' alt='' />
                        <div className='navbar-logo-description'>
                            <h3>Heisenberg</h3>
                            <p>Powered by Royal Developers</p>
                        </div>
                    </div>
                    <div className='navbar-consultation'>
                        <h4>GET FREE CONSULTATION!</h4>
                        <p>013/XXX-XXX</p>
                    </div>
                </div>
            </div>
           <div className='navbar-links'>
                <div className='container flex-between'>
                    <div className='hamburger-menu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <Link to='/'>
                            <li className='active-link home-link'><i className="fas fa-home"></i>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li><i className="fas fa-address-card"></i>About Agency</li>
                        </Link>
                        <Link to='/service'>
                            <li><i className="fas fa-folder-open"></i>Our Services</li>
                        </Link>
                        <Link to='/news'>
                            <li><i className="far fa-newspaper"></i>News</li>
                        </Link>
                        <Link to='/contact'>
                            <li><i className="fas fa-address-book"></i>Contact</li>
                        </Link>
                    </ul>
                    <Search />
                </div>
           </div>
        </Fragment>
    )
}

export default Navbar
