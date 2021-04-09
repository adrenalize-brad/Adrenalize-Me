import React from 'react'
import { Link } from 'gatsby'
import './button.scss'
 
const Button = ({title, url, buttonClass}) => {

    return(

        <Link
            to={url} 
            className={`button ${buttonClass}`}
        >
            {title}
        </Link>

    )
}   

export default Button