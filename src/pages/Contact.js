import React from 'react';
import ContactPhoto from "../assets/bgnew.jpg";
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div 
                className="leftSide" 
                style={{ backgroundImage: `url(${ContactPhoto})`}}
            ></div>
            <div className="rightSide">
                <h1>Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder="Enter full name..."/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter email..."/>

                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        cols="30" rows="6" 
                        placeholder="Enter message..." 
                        required>
                    </textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
