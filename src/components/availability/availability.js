import './availability.scss';

const Availability = () => {
    return (
        <div className="availability-container" id='download'>
            <div className="availability-container__left">
                <h1>Available for free!</h1>
                <p>Download free app from Google Play Store or App Store now and become a better musician!</p>
                <div className="store-buttons">
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                    </a>
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                    </a>
                </div>
            </div>
            <div className="availability-container__right">  
                <h3>Write to us!</h3>
                <div>
                <div>Email</div>
                    <a href="mailto:feedback@thriill.com">feedback@thriill.com</a>
                </div>
            </div>
        </div>
    );
}

export default Availability;
