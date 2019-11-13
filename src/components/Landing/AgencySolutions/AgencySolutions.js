import React, { Fragment }from 'react'
import './AgencySolutions.scss' 

const AgencySolutions = () => {
    return (
        <Fragment>
            <div id='agency-solutions'>
                <div className='container'>
                <div class='agency-solutions'>
                    <p>WHAT WE DO</p>
                    <h1>We Creating Solutions For Your Organization</h1>
                    <span></span>
                    <div className='agency-solutions-grid'>
                        <div className='agency-solutions-grid-item'>
                            <i class="fas fa-clipboard fa-2x"></i>
                            <h3>Portfolio & Resource Allocation</h3>
                            <p>By balancing and optimizing the many competing assets and initiatives achieve deep & lasting improvements.</p>
                        </div>
                        <div className='agency-solutions-grid-item'>
                            <i class="fas fa-users fa-2x"></i>
                            <h3>Organization & Decision Process</h3>
                            <p>Organizations are designed to be effective and an efficient. The processes require cross-functional teaming.</p>
                        </div>
                        <div className='agency-solutions-grid-item'>
                        <i class="fas fa-chalkboard-teacher fa-2x"></i>
                            <h3>Business Finance Strategy</h3>
                            <p>Devise and implement business strategies that drive success—for an entire business or division, technology, or asset.</p>
                        </div>
                        <div className='agency-solutions-grid-item'>
                        <i class="fas fa-people-carry fa-2x"></i>
                            <h3>Decision & Risk Analytic</h3>
                            <p>Our decision risk analytics empower clients to develop rational decision-making models and development.</p>
                        </div>
                        <div className='agency-solutions-grid-item'>
                        <i class="fas fa-money-check-alt fa-2x"></i>
                            <h3>Banking & Capital Markets</h3>
                            <p>The venues where savings and investments are channeled between the suppliers who have capital and those.</p>
                        </div>
                        <div className='agency-solutions-grid-item'>
                        <i class="fas fa-map-marked-alt fa-2x"></i>
                            <h3>Modern & Tribe Workplace</h3>
                            <p>Redefine your workplace value equation that encourage staff to work more attentively and gracefully.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default AgencySolutions
