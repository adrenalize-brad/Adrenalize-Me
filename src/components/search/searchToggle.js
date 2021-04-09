import React from 'react';
import { CloseIcon, SearchIcon } from '../icons/icons'
import { bool, func } from 'prop-types'

 
const SearchOpenToggle = ({toggleOpen, setToggleOpen}) => {

    return(
    
        <div open={toggleOpen} onClick={() => setToggleOpen(!toggleOpen)} onKeyDown={() => setToggleOpen(!toggleOpen)} role="button" aria-pressed="false" tabIndex="0">
            <SearchIcon className="search-icon" open={toggleOpen} onClick={() => setToggleOpen(!toggleOpen)} onKeyDown={() => setToggleOpen(!toggleOpen)} role="button" aria-pressed="false" tabIndex="0"/>
        </div>   
    )
}

const SearchCloseToggle = ({toggleOpen, setToggleOpen}) => {

    return(
    
        <div className="search-toggle" open={toggleOpen} onClick={() => setToggleOpen(!toggleOpen)} onKeyDown={() => setToggleOpen(!toggleOpen)} role="button" aria-pressed="false"  tabIndex="0">
            <CloseIcon className="close-icon" open={toggleOpen} onClick={() => setToggleOpen(!toggleOpen)} onKeyDown={() => setToggleOpen(!toggleOpen)} role="button" aria-pressed="false" tabIndex="0"/>
        </div>   
    )
}

SearchOpenToggle.propTypes = {
    toggleOpen: bool.isRequired,
    setToggleOpen: func.isRequired,
};

SearchCloseToggle.propTypes = {
    toggleOpen: bool.isRequired,
    setToggleOpen: func.isRequired,
};

export { SearchOpenToggle, SearchCloseToggle }