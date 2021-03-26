import React from 'react'
import { Link } from 'gatsby'

const Button = ({title, url, buttonClass}) => {

    return(

        <Link
            to={url} 
            className={buttonClass}
        >
            {title}
        </Link>

    )
}   

export default Button