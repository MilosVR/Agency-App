import React, { useEffect } from 'react'
import './Search.scss'

const Search = () => {

    const toggleInputSearch = () => {
        const searchIcon = document.querySelector('.search-input input')
        if (searchIcon.classList.contains('toggle-search-input')) {
            searchIcon.classList.remove('toggle-search-input')
        } else {
            searchIcon.classList.add('toggle-search-input')
        }
    }

    useEffect(() => {
        const searchIcon = document.querySelector('.search-input i')

        searchIcon.addEventListener('click', toggleInputSearch);
        return () => {
            searchIcon.removeEventListener('click', toggleInputSearch);
        }
    })

    return (
        <div>
            <div className='search-input'>
                <i className="fas fa-search"></i>
                <input type='text' placeholder='Search...'/> 
            </div>
        </div>
    )
}

export default Search
