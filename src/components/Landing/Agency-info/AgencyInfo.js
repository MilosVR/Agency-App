import React from 'react'
import './AgencyInfo.scss'

const AgencyInfo = (props) => {
    return (
        <div id='agency-info'>
            <div className='container'>
                <div className='agency-info'>
                    <div className='agency-info-item'>
                        <i className="fab fa-font-awesome-flag fa-2x"></i>
                        <h4>12 YEARS OF EXPERIENCE</h4>
                        <p>
                            We are lorem isum–lorem amet  ipsum dolor porta ullam rutrum glavrida unicus amet from.
                        </p>
                    </div>
                    <div className='agency-info-item'>
                        <i className="fas fa-user-friends fa-2x"></i>
                        <h4>BEST INDUSTRY EXPERTS</h4>
                        <p>
                            We are lorem isum–lorem amet  ipsum dolor porta ullam rutrum glavrida unicus amet from.
                        </p>
                    </div>
                    <div className='agency-info-item'>
                        <i className="fas fa-business-time fa-2x"></i>
                        <h4>FAST & EFFECTIVE SOLLUTIONS</h4>
                        <p>
                            We are lorem isum–lorem amet  ipsum dolor porta ullam rutrum glavrida unicus amet from.
                        </p>
                    </div>
                    <div className='agency-info-item'>
                        <i className="fab fa-ubuntu fa-2x"></i>
                        <h4>FLEXIBLE PRICING SYSTEM</h4>
                        <p>
                            We are lorem isum–lorem amet  ipsum dolor porta ullam rutrum glavrida unicus amet from.
                        </p>
                    </div>
                </div>
                <h1 className='agency-main-title'>About Agency</h1>
                <div className='agency-body'>
                    <div className='container'>
                        <div className='agency-body-grid'>
                            <div className='about-our-company'>
                                <img src='/assets/buissness/buissness.jpg'/>
                                <h3>ABOUT OUR COMPANY</h3>
                                <p>
                                    Donec odio augue placerat est, nec semper nisl lorem ipsum vestibulum lectus sem!
                                    Maecenas feugiat, nulla eget maximus elementum, odio augue placerat est, nec semper nisl erat ac ex el convallis ligula commodo ac. 
                                    Aenean congue. Nunc eu tellus pellentesque!
                                </p>
                                <button>MORE ABOUT OUR COMPANY</button>
                            </div>
                            <div className='agency-body-grid-item'>
                                <div className='agency-grid-item-inner'>
                                    <i className="fas fa-layer-group"></i>
                                    <div className='agency-grid-item-description'>
                                        <h4>TRANSPARENCY</h4>  
                                        <p>Transparency is maecenas sit amet tincidunt elit lorem ipsum urabitur quis rhoncus.</p>
                                    </div>
                                </div>
                                <div className='agency-grid-item-inner'>
                                    <i className="fas fa-spinner"></i>
                                    <div className='agency-grid-item-description'>
                                        <h4>INTEGRITY</h4>  
                                        <p>Because acting with integrity ipsum porta maximus.</p>
                                    </div>
                                </div>
                                <div className='agency-grid-item-inner'>
                                    <i className="fas fa-user-tie"></i>
                                    <div className='agency-grid-item-description'>
                                        <h4>RESPECT</h4>
                                        <p>Respect is morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> 
                                    </div>
                                </div>
                                <div className='agency-grid-item-inner'>
                                    <i className="fas fa-leaf"></i>
                                    <div className='agency-grid-item-description'>
                                        <h4>DIVERSITY</h4> 
                                        <p>Because diversity lorem ipsum dolor odi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='agency-body-slider'>
                                <img src='assets/agency-body-slider/agency-body-profile.jpg' />
                                <h4>MIRIAM GREENWOOD</h4>
                                <h5>consultant</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h5>TEL: 013 XXX XX XXX</h5>
                                <h5>MIRIAM@WEBSITE.COM</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AgencyInfo
