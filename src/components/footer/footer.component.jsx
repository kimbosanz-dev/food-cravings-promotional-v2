import React from 'react';
import './footer.component.scss';
import { Link } from 'react-router-dom';

function FooterComponent() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <Link to='/' className="footer-logo">
                        <div className="footer-icon" />
                        <span className="brand-name">Food Cravings PH</span>
                    </Link>
                    <span className="copy-right-span">Copyright © Food Cravings PH 2020</span>
                    <Link to='/' className="terms-and-policies">
                        <span className="brand-name">Privacy Policy</span>
                    </Link>
                    <Link to='/' className="terms-and-policies">
                        <span className="brand-name">Terms & Conditions</span>
                    </Link>
                    <Link>
                        <img src="images/socmed.png" alt="facebook.png" height="40" width="40"/>
                    </Link>
                    <Link>
                        <img src="images/socmed-1.png" alt="twitter.png" height="40" width="40"/>
                    </Link>
                    <Link>
                        <img src="images/socmed-2.png" alt="instagram.png" height="40" width="40"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FooterComponent
