import React from 'react'
import { bool, func } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileSocialItem = ({open, setOpen, className, url, iconClass, alt, ariaLabel, key}) => {

    return(

        <a
            className={className} 
            href={url} 
            alt={alt}
            aria-label={ariaLabel} 
            target="_blank" 
            rel="noopener noreferrer"
            open={open} 
            onClick={() => setOpen(!open)}
            key={key}
        >
            
            <FontAwesomeIcon icon={['fab', `${iconClass}`]} className={className} />

        </a>

    )
}

MobileSocialItem.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};


export default MobileSocialItem