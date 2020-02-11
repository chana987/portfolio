import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div className="contact view">
            <h1>Contact Me</h1>
            <div className="contacts">
                <div className="contact-field">
                    <FontAwesomeIcon className="contact-icon" icon={['fab', 'github']} />
                    <h5 className="field">GitHub</h5>
                    <a href="https://github.com/chana987" className="contact-value">github.com/chana987</a>
                </div>
                <div className="contact-field">
                    <FontAwesomeIcon className="contact-icon" icon={['fab', 'linkedin']} />
                    <h5 className="field">LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/chana-meyer" className="contact-value">linkedin.com/in/chana-meyer</a>
                </div>
                <div className="contact-field">
                    <FontAwesomeIcon className="contact-icon" icon="envelope" />
                    <h5 className="field">Email</h5>
                    <a href="mailtp:chana987@gmail.com" className="contact-value">chan987@gmail.com</a>
                </div>
                <div className="contact-field">
                    <FontAwesomeIcon className="contact-icon" icon="phone" />
                    <h5 className="field">Phone</h5>
                    <p className="contact-value">0505806966</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
