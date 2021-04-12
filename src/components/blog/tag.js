import React from 'react'
import './blog.scss'
 
const Tag = ({ children, key }) => {

    return(

        <div className="tag" key={key}>
            <span>{children}</span>
        </div>
    )
}
 
export default Tag