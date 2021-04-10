import React from 'react'
import { bool, func } from 'prop-types'
   
const MobileSocialItem = ({open, setOpen, className, url, iconClass, alt}) => {

    return(

        <a
            className={className} 
            href={url} 
            alt={alt} 
            target="_blank" 
            rel="noopener noreferrer"
            open={open} 
            onClick={() => setOpen(!open)}
        >
            
            <i 
                className={iconClass} 
            />
        
        </a>

    )
}

MobileSocialItem.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};


export default MobileSocialItem