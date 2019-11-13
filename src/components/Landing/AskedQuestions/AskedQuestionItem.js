import React, { useState } from 'react'
import './AskedQuestions.scss'

const AskedQuestionItem = ({accordionState}, props) => {
    const [toggleAccordion, setToggleAccordion] = useState(false)
    const toggleAccordionHandler = () => {
        setToggleAccordion(!toggleAccordion)
    }
    return (
        <div className={`asked-question-accordion ${toggleAccordion && 'isOpen'}`}>

            <div className={`asked-question-accordion-toogle ${toggleAccordion && 'isOpenToggle'}`} 
                onClick={toggleAccordionHandler}>
                <span>{toggleAccordion ? '-' : '+'}</span> 
                {accordionState.accordionTitle}
            </div>
            <div className={`asked-question-load-more ${toggleAccordion && 'isOpen'}`}>
                <p>{accordionState.accordionLoadMore}</p>
            </div>


        </div>
    )
}

export default AskedQuestionItem
