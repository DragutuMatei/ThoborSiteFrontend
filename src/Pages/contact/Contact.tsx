import React from 'react';
import './contact.scss';

function Contact() {
    return (
        <div className="contact-form">
            <div className="contact-form-heading">
            <h2>Get in touch with us</h2>
            </div>
            <form>
                <div className="text-email">
                <input type="text" id="name" name="name" required placeholder="Your Name (required)"/>
                <input type="email" id="email" name="email" required placeholder="Your Email (required)" />
                </div>
                <textarea id="textarea" name="sugestii" placeholder="Your Message"/>
                <input type="submit" value="Get in touch" id="submit" />
            </form>
        </div>
    )
}

export default Contact
