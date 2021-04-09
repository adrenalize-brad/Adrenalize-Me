import React from 'react'
import './page.scss'

const PageWrapper = ({ children }) => {

    return(

        <div className="page-wrapper">
            {children}
        </div>
    )
}

export default PageWrapper