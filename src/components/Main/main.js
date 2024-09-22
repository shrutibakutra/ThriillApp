import React, { useEffect } from 'react';
import "./main.scss";
import hero from "../../assets/mockup1.png";

const Main = () => {

    const adjustScroll = () => {
        const sections = ['features', 'screenshots', 'download', 'contact'];

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.scrollMarginTop = '80px';
            }
        });
    };

    useEffect(() => {
        adjustScroll();
    }, []);

    return (
        <div className="main-container">
        <div className='main'>
            <div className='main__left-end'>
                <h1 className='main__left-end__title'>🎶 Welcome to ThriillApp! 🎶</h1>
                <div className='main__left-end__sub-title'>Unlock the world of music theory, from notations to intervals, in a fun and engaging way—right at your fingertips. Ready to level up your musical skills? Sign up and start the journey today!</div>
                <div className='main__left-end__buttons'>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </a>
                </div>
            </div>
            <div className='main__right-end' >
                <img src={hero} height={"600px"} />
            </div>
        </div>
        </div>
    );
};

export default Main;
