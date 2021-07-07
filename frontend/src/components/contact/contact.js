import './contact.css'
import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    return ( 
        <h2 class="contact-link" id="contact">
            <Link to="/contact"> Let's work together<i class="bi bi-arrow-right"></i></Link>
        </h2>
     );
}
 
export default Contact;