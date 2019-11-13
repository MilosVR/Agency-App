import React, { useEffect } from 'react'
import './Slider.scss'

const Slider = (props) => {

    const dotsLandingSlider = e => {
        const sliderLanding = document.querySelector('.slider-landing');
        const sliderLandingArr = Array.from(sliderLanding.children);
        const landingDots = document.querySelector('.slider-landing-dots');
        const landingDotsArr = Array.from(landingDots.children);
        const targetDot = landingDotsArr.findIndex(item => item === e.target)
        const currentDot = document.querySelector('.slider-landing-active-dot')

        sliderLandingArr.map(item => {
            item.style.opacity = '0';
            item.classList.remove('slide-landing-animation')
        })

        sliderLandingArr[targetDot].classList.add('slide-landing-animation');
        sliderLandingArr[targetDot].style.opacity = '1';
        
        e.target.classList.add('slider-landing-active-dot');
        currentDot.classList.remove('slider-landing-active-dot');
        
    }

    useEffect(() => {
        const sliderLanding = document.querySelector('.slider-landing');
        const sliderLandingArr = Array.from(sliderLanding.children);
        const landingDots = document.querySelector('.slider-landing-dots');
        const landingDotsArr = Array.from(landingDots.children);

        sliderLandingArr.map(item => {
            item.style.opacity = '0'
        })

        sliderLandingArr[0].style.opacity = '1'
        sliderLandingArr[0].classList.add('slide-landing-animation')

        landingDotsArr.map(item => {
            item.addEventListener('click', dotsLandingSlider)
        })
        return () => {
            landingDotsArr.map(item => {
                item.removeEventListener('click', dotsLandingSlider)
            })  
        }
    })

    return (
        <div id='slider-landing'>

            <div className='container'>
                <div className='slider-landing-dots'>
                    <span className='slider-landing-active-dot'></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='slider-landing'>

                <div className='slide-landing'>
                    <div className='slide-landing-wraper'>
                        <div className='slide-item-left'>
                            <div className='slide_item-one-description'>
                                <h1>SEARCHING FOR A JOB?</h1>
                                <div className='slide_item-one-description-line'></div>
                                <p>
                                    Lorem ipsum dolor sit amet, dicunt molestie ne vix, mea aliquip detracto copiosae in. 
                                    Affert efficiendi id qui, ex saperet appareat laboramus eam. 
                                    Stet intellegat eam et. Ex ridens sapientem referrentur qui, vix mazim audiam ut, no vim congue instructior.
                                </p>
                            </div>
                            <button>View Details</button>
                        </div>
                        <div className='slide-item-right'>
                            <img src='./assets/buissness/buissness.jpg' alt='' />
                        </div>
                    </div>
                </div>
                <div className='slide-landing'>
                    <div className='slide-landing-wraper'>
                        <div className='slide-item-left'>
                            <div className='slide_item-one-description'>
                                <h1>BUSINESS CONSULTING?</h1>
                                <div className='slide_item-one-description-line'></div>
                                <p>
                                    Lorem ipsum dolor sit amet, dicunt molestie ne vix, mea aliquip detracto copiosae in. 
                                    Affert efficiendi id qui, ex saperet appareat laboramus eam. 
                                    Stet intellegat eam et. Ex ridens sapientem referrentur qui, vix mazim audiam ut, no vim congue instructior.
                                </p>
                            </div>
                            <button>View Details</button>
                        </div>
                        <div className='slide-item-right'>
                            <img src='./assets/buissness/buissness1.jpg' alt='' />
                        </div>
                    </div>
                </div>
                <div className='slide-landing'>
                    <div className='slide-landing-wraper'>
                        <div className='slide-item-left'>
                            <div className='slide_item-one-description'>
                                <h1>FINANCE & BANKING?</h1>
                                <div className='slide_item-one-description-line'></div>
                                <p>
                                    Lorem ipsum dolor sit amet, dicunt molestie ne vix, mea aliquip detracto copiosae in. 
                                    Affert efficiendi id qui, ex saperet appareat laboramus eam. 
                                    Stet intellegat eam et. Ex ridens sapientem referrentur qui, vix mazim audiam ut, no vim congue instructior.
                                </p>
                            </div>
                            <button>View Details</button>
                        </div>
                        <div className='slide-item-right'>
                        <img src='./assets/buissness/buissness2.jpg' alt='' />>
                        </div>
                    </div>
                </div>

                </div>

                    

            </div> 
        </div>
    )
}

export default Slider
