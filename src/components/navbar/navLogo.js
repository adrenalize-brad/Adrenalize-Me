import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
 
const NavLogo = ( { linkUrl, image, imageAlt, title, caption }) => {

    return(
    
        <Link className="site-id" to={linkUrl} alt="Home">
                <GatsbyImage image={image} alt={imageAlt}/>
                <div className="site-title">
                    <h2>{title}</h2>
                    <h4>{caption}</h4>
                </div>
        </Link>
    
    )
}


export default NavLogo