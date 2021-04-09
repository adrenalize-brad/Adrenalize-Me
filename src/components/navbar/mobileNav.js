import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './MobileNav.styled';
   
const MobileNav =({className, children, open}) =>{

    return(
        
        <StyledMenu open={open} className={className}>
                {children}           
        </StyledMenu>
    
    )
}

MobileNav.propTypes = {
    open: bool.isRequired,
  }

export default MobileNav