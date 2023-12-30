import React from 'react'
import './Footer.css';
import footer_logo from '../Data/logo_big.png';
import instagram_icon from '../Data/instagram_icon.png';
import pintester_icon from '../Data/pintester_icon.png';
import whatsapp_icon from '../Data/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>ECOMMERCE</p>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024</p>
            </div>
        </div>
    )
}

export default Footer