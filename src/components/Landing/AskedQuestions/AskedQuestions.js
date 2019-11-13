import React, { useState } from 'react'
import './AskedQuestions.scss'
import AskedQuestionItem from './AskedQuestionItem';



const AskedQuestions = (props) => {
    
    const [accordionState, setAccordionState] = useState([
        { 
            accordionTitle : "Where should i incorporate my business?",
            accordionLoadMore: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition approaches to corporate strategy."
        },
        { 
            accordionTitle : "Where can i find market research reports?",
            accordionLoadMore: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition approaches to corporate strategy."
        },
        { 
            accordionTitle : "What type of company is measured?",
            accordionLoadMore: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition approaches to corporate strategy."
        },
        { 
            accordionTitle : "How to find job?",
            accordionLoadMore: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition approaches to corporate strategy."
        },

    ])

 
    return (
        <div id='asked-questions'>
            <div className='container'>
                <div className='asked-questions'>
                    <div className='frequently-asked-questions-accordion'>
                        <h2>Frequently Asked Questions</h2>

                        {accordionState && accordionState.map(item => {
                            return (
                                <AskedQuestionItem 
                                    key={item.accordionTitle}
                                    accordionState={item}
                                />
                            )
                        })

                        }
                        
                    </div>
                    <div className='frequently-asked-questions'>
                        <h2>Request A Quote</h2>
                        <form autoComplete='off'>
                            <div className='frequently-asked-questions-inputs'>
                                <input type='text' placeholder='Name' name='name'/>
                                <input type='text' placeholder='Email' name='email'/>
                            </div>
                            <input type='text' placeholder='Your Webiste'/>
                            <textarea 
                                placeholder='Your Message Here'
                                rows='5'
                                >
                            </textarea>
                            <input type='submit' value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskedQuestions
