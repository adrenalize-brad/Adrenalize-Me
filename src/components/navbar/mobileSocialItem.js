import React from 'react'
import { Link } from 'gatsby'
import { bool, func } from 'prop-types'
   
const MobileSocialItem = ({open, setOpen, className, url, iconClass, alt}) => {

    return(

        <Link 
            className={className} 
            to={url} 
            alt={alt} 
            target="_blank" 
            rel="noopener noreferrer"
            open={open} 
            onClick={() => setOpen(!open)}
        >
            
            <i 
                className={iconClass} 
            />
        
        </Link>

    )
}

MobileSocialItem.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};


export default MobileSocialItem