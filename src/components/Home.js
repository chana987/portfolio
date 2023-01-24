import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className="home view">
            <h1>Hi! I'm Chana,</h1>
            <Link to="/portfolio">
                <h2 className="home-link">
                    Come check out my work
                    <FontAwesomeIcon style={{ paddingLeft: '1rem' }} icon="arrow-right" />
                </h2>
            </Link>
            <div className="contacts">
                <h3 className="contact-title">Contact Me</h3>
                <div className="contact-field">
                    <FontAwesomeIcon className="contact-icon" icon={ [ 'fab', 'github' ] } />
                    <h5 className="field">GitHub</h5>
                    <a href="https://github.com/chana987" className="contact-value">github.com/chana987</a>
                </div>
                <div className="contact-field">
                    <FontAwesomeIcon className="contact-icon" icon={ [ 'fab', 'linkedin' ] } />
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
    );
};

export default Home;
