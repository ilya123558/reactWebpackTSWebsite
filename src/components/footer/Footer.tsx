import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-left">
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="footer-logo">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6725 3.05262H3.08771V25.3808H25.6725V3.05262ZM3.08771 0H0V3.05262V25.3808V28.4334H3.08771H25.6725H28.7602V25.3808V3.05262V0H25.6725H3.08771ZM20.9013 8.05166L20.3878 10.106C20.1744 10.9661 19.3887 11.5678 18.4886 11.5678H10.3502L10.8637 9.51038C11.0772 8.65338 11.8597 8.05166 12.7599 8.05166H20.9013ZM9.64595 14.5727C9.85874 13.7043 10.639 13.0915 11.5364 13.0915H17.2263L16.7143 15.1732C16.5015 16.0447 15.7182 16.6575 14.8208 16.6575H12.8101L12.1378 19.4568C11.9219 20.3283 11.1386 20.9442 10.2381 20.9442H8.09782L9.64595 14.5727Z" fill="white" />
                        </svg>
                    </div>
                    <div className="footer-right">
                        <p>@ 2021 FOILnetwork. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;