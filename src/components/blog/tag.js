import React from 'react'
import './blog.scss'

const Tag = ({ children }) => {

    return(

        <div className="tag">
            <span>{children}</span>
        </div>
    )
}

export default Tag