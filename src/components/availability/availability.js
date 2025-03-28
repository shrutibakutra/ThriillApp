import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './availability.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Availability = () => {
    const [showEmail, setShowEmail] = useState(false);

    const handleShowEmail = () => {
        setShowEmail(true);
    };

    return (
        <div className="availability-container" id='contact'>
            <div className="availability-container__left">
                <p>Download app from Google Play Store or App Store now and become a better musician! 
                <Link to="/privacy-policy" className="availability-container__left__policy">
                        See Privacy Policy
                </Link></p>
                <div className="store-buttons">
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.thriill.app" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                    </a>
                </div>
                <div className="availability-container__left">
                    <p className='mt-4'> © 2024 Thrill. All rights reserved. </p>
                </div>
            </div>

            <div className="availability-container__right">
                <div>
                    <h3>Write to us!</h3>
                    {!showEmail ? (
                        <button onClick={handleShowEmail} className="cta-button">
                            Email
                        </button>
                    ) : (
                        <a href="mailto:feedback@thriill.com">feedback@thriill.com</a>
                    )}
                </div>
                <div>
                    <div className="availability-container__right__follow">
                        Follow us on
                    </div>
                    <div>
                        <a href='https://www.instagram.com/thriillapp?igsh=dWlmbWR5NWhyYnhq'>
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#fafafa"}}/>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=61558666558135'>
                            <FontAwesomeIcon icon={faFacebookF} style={{color: "#fafafa"}}/>
                        </a>
                        <a href='https://youtube.com/@thriillapp?feature=shared'>
                            <FontAwesomeIcon icon={faYoutube} style={{color: "#fafafa"}}/>
                        </a>
                        <a href='https://www.tiktok.com/@thriill.com?_t=8pkNUYkvnpg&_r=1'>
                            <FontAwesomeIcon icon={faTiktok} style={{color: "#fafafa"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Availability;
