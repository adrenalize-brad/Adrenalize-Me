import React from 'react'
import { Link } from 'gatsby'
import { bool, func } from 'prop-types'
  
const MobileMenuItem = ({ open, setOpen, url, alt, title, className }) => {

    return(

        <Link
            className={className}
            to={url}
            alt={alt}
            open={open}
            onClick={() => setOpen(!open)}
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