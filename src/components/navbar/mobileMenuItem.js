import React from 'react'
import { Link } from 'gatsby'
import { bool, func } from 'prop-types'
   
const MobileMenuItem = ({ open, setOpen, url, alt, title, className, ariaLabel, key }) => {

    return(

        <Link
            className={className}
            to={url}
            alt={alt}
            aria-label={ariaLabel}
            open={open}
            onClick={() => setOpen(!open)}
            key={key}
        >
            {title}
        </Link>

    )

}

MobileMenuItem.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default MobileMenuItem