import React from 'react'
import { StyledToggle } from './MenuToggle.styled';
import { bool, func } from 'prop-types'
   
const MenuToggle = ({open, setOpen}) => {
 
    return(
    
        <StyledToggle open={open} onClick={() => setOpen(!open)} className="toggle-button" role="button" aria-label="Menu Toggle">
            <div />
            <div />
            <div />
        </StyledToggle>   
    )
}

MenuToggle.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default MenuToggle