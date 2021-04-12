import React from 'react'
import { Link } from 'gatsby'
import './button.scss'
  
const Button = ({title, url, buttonClass, ariaLabel}) => {

    return(

        <Link
            to={url} 
            className={`button ${buttonClass}`}
            aria-label={ariaLabel}
        >
            {title}
        </Link>

    )
}   

export default Button