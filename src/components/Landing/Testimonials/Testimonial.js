import React, { useEffect } from 'react'
import './Testimonial.scss'

const Testimlnial = (props) => {


    const nextSlideHandler = () => {
        const currentSlide = document.querySelector('.current-testimonial-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const slider = document.querySelector('.testimonial-slider');
        const arrowLeft = document.querySelector('.testimonial-slider-left-wraper');
        const arrowRight = document.querySelector('.testimonial-slider-right-wraper');
        const sliderArr = Array.from(slider.children)

        if (nextSlide === sliderArr[sliderArr.length-1]) {
            arrowRight.style.display = 'none'
            arrowLeft.style.display = 'block'
        }
        else {
            arrowRight.style.display = 'block'
            arrowLeft.style.display = 'block'
        }

        const currentDot = document.querySelector('.testimonial-active-dot');
        currentDot.nextElementSibling.classList.add('testimonial-active-dot')
        currentDot.classList.remove('testimonial-active-dot')

        slider.style.transform = `translateX(-${nextSlide.style.left})`
        currentSlide.classList.remove('current-testimonial-slide');
        nextSlide.classList.add('current-testimonial-slide');
    }

    const prevSlideHandler = () => {
        const currentSlide = document.querySelector('.current-testimonial-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const slider = document.querySelector('.testimonial-slider');
        const sliderArr = Array.from(slider.children)
        const arrowLeft = document.querySelector('.testimonial-slider-left-wraper');
        const arrowRight = document.querySelector('.testimonial-slider-right-wraper');

        if (prevSlide === sliderArr[0]) {
            arrowLeft.style.display = 'none'
            arrowRight.style.display = 'block'
        }else{
            arrowLeft.style.display = 'block'
            arrowRight.style.display = 'block'
        }

        const currentDot = document.querySelector('.testimonial-active-dot');
        currentDot.previousElementSibling.classList.add('testimonial-active-dot')
        currentDot.classList.remove('testimonial-active-dot')
        

        slider.style.transform = `translateX(-${prevSlide.style.left})`
        currentSlide.classList.remove('current-testimonial-slide');
        prevSlide.classList.add('current-testimonial-slide');    
    }

    const dotsSliderHandler = e => {
        const dots = document.querySelector('.testimonial-slider-dots');
        const dotsArr = Array.from(dots.children);
        const currentDot = document.querySelector('.testimonial-active-dot');
        const currentSlide = document.querySelector('.current-testimonial-slide');
        const slider = document.querySelector('.testimonial-slider');
        const sliderArr = Array.from(slider.children)
        const arrowLeft = document.querySelector('.testimonial-slider-left-wraper');
        const arrowRight = document.querySelector('.testimonial-slider-right-wraper');

        const targetDot = dotsArr.findIndex(item => item === e.target)
        const targetSlide = sliderArr[targetDot]

        if (targetDot === 0) {
            arrowLeft.style.display = 'none'
            arrowRight.style.display = 'block'
        }else if(targetDot === dotsArr.length-1){
            arrowLeft.style.display = 'block'
            arrowRight.style.display = 'none'
        }else{
            arrowLeft.style.display = 'block'
            arrowRight.style.display = 'block'
        }

        slider.style.transform = `translateX(-${targetSlide.style.left})`
        targetSlide.classList.add('current-testimonial-slide')
        currentSlide.classList.remove('current-testimonial-slide');

        e.target.classList.add('testimonial-active-dot')
        currentDot.classList.remove('testimonial-active-dot');


    }

    useEffect(()=> {
        const slider = document.querySelector('.testimonial-slider');
        const arrowLeft = document.querySelector('.testimonial-slider-left-wraper');
        const arrowRight = document.querySelector('.testimonial-slider-right-wraper');
        const sliderArr = Array.from(slider.children)
        const sliderWidth = sliderArr[0].getBoundingClientRect().width;
        //dots init
        const dots = document.querySelector('.testimonial-slider-dots');
        const dotsArr = Array.from(dots.children);
        

        sliderArr.map((item, index) => {
            return item.style.left = sliderWidth * index + 'px'  
        })
        arrowLeft.style.display = 'none'

        arrowLeft.addEventListener('click', prevSlideHandler)
        arrowRight.addEventListener('click', nextSlideHandler)

        dotsArr.map(item => {
            item.addEventListener('click', dotsSliderHandler)
        })

        return () => {
            arrowLeft.removeEventListener('click', prevSlideHandler);
            arrowRight.removeEventListener('click', nextSlideHandler);
            dotsArr.map(item => {
                item.removeEventListener('click', dotsSliderHandler)
            })
        }
    })
   
    

    return (
        <div id='testimonial'>
            <div className='testimonial-banner'>
                <h2>HURRY UP! CONTACT US TODAY AND GET</h2>
                <h1>FREE FIRST CONSULTATION</h1>
                <button>BOOK YOUR CONSULTATTION</button>
            </div>
            <div className='testimonial'>
                <div className='container'>
                <div className='testimonial-slider'>

                    <div className='testimonial-slider-item current-testimonial-slide'>
                        <div className='testimonial-slider-item-profile'>
                            <div className='testimonial-slider-item-profile-info-wraper'>
                                <div className='testimonial-slider-item-profile-info'>
                                    <h3>Tifany Smith</h3>
                                    <span>Consultant</span>
                                </div>
                                <img src='/assets/testimonialProfile1.png' alt=''/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, ea eum aeterno accusam, ad legendos democritum vel. Nam aeque luptatum te. Dico repudiandae his at, his ne melius senserit, oblique malorum ceteros sea ei. An primis persius inciderint pro, cum nisl porro no. Amet omnium luptatum vix ex, ex duo simul oporteat reprehendunt.</p>
                        </div>
                    </div>
                    
                    <div className='testimonial-slider-item'>
                        <div className='testimonial-slider-item-profile'>
                            <div className='testimonial-slider-item-profile-info-wraper'>
                                <div className='testimonial-slider-item-profile-info'>
                                    <h3>John Doe</h3>
                                    <span>Consultant</span>
                                </div>
                                <img src='/assets/testimonialProfile2.png' alt=''/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, ea eum aeterno accusam, ad legendos democritum vel. Nam aeque luptatum te. Dico repudiandae his at, his ne melius senserit, oblique malorum ceteros sea ei. An primis persius inciderint pro, cum nisl porro no. Amet omnium luptatum vix ex, ex duo simul oporteat reprehendunt.</p>
                        </div>
                    </div>

                    <div className='testimonial-slider-item'>
                        <div className='testimonial-slider-item-profile'>
                            <div className='testimonial-slider-item-profile-info-wraper'>
                                <div className='testimonial-slider-item-profile-info'>
                                    <h3>Whitney Dillon</h3>
                                    <span>Consultant</span>
                                </div>
                                <img src='/assets/testimonialProfile3.png' alt=''/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, ea eum aeterno accusam, ad legendos democritum vel. Nam aeque luptatum te. Dico repudiandae his at, his ne melius senserit, oblique malorum ceteros sea ei. An primis persius inciderint pro, cum nisl porro no. Amet omnium luptatum vix ex, ex duo simul oporteat reprehendunt.</p>
                        </div>
                    </div>


                </div>

                
                <div className='testimonial-slider-dots'>
                    <span className='testimonial-active-dot'></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='testimonial-slider-left-wraper'>
                    <div className='testimonial-slider-left'></div>
                </div>

                <div className='testimonial-slider-right-wraper'>
                    <div className='testimonial-slider-right'></div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Testimlnial
