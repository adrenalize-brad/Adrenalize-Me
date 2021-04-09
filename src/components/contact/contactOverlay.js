import React from 'react'
import ContactForm from './contactForm'
import './contact.scss'
  
const ContactOverlay = () => {

    return(

        <div className="contact-overlay">

            <div className="header">
                <h1>Contact</h1>
            </div>

            <ContactForm/>

        </div>

    )
}

export default ContactOverlay