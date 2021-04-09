import React, { useState } from 'react'

const ContactForm = () => {

    const [ name, setName ] = useState("");
    const [ subject, setSubject ] = useState("");

    const handleChange = ({ target }) => {

        switch(target.name){
            case "name":
                setName(target.value);
                break;
            case "subject":
                setSubject(target.value);
                break;
            default:
                return;
        }
    }
  
    const handleSubmit = (event) => {

        event.preventDefault();

    }

    return(

<div>

    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={handleSubmit} >
        
        {/* Netlify Spam Reject */}

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Form Inputs */}

        <div className="text-input">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Cash Smith" value={name} onChange={handleChange} />
        </div>

        <div className="text-input">
            <label htmlFor="age">Subject:</label>
            <input type="text" name="subject" value={subject} onChange={handleChange} />
        </div>

        <button className="form-submit" type="submit">Submit</button>

    </form>

</div>

    )
}

export default ContactForm