import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return <div
        className="grey-text footer-container"
    >
        <footer>Copyright @ Vikas Choubey, {year}</footer>
    </div>
}

export default Footer;