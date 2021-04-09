import React from 'react'
import Header from './header'
import Footer from './footer'
  
function Layout({ children, pageContext: { page } }) {
    return (

      <React.Fragment>
        <div>
          <Header />
          <main style = {{paddingTop:100}}>{children}</main>
          <Footer />
        </div>
      </React.Fragment>
      
    )
  }
  
  export default Layout