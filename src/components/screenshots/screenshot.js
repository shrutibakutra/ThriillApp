import React, { useState } from 'react';
import "./screenshot.scss";
import thriill1 from "../../assets/thriill1.png";
import thriill2 from "../../assets/thriill2.png";
import thriill3 from "../../assets/thriill3.png";
import thriill4 from "../../assets/thriill4.png";
import thriill5 from "../../assets/thriill5.png";
import thriill6 from "../../assets/thriill6.png";
import thriill7 from "../../assets/thriill5\7.png";


const items = [
    { src: thriill1, key: 1 },
    { src: thriill2, key: 2 },
    { src: thriill3, key: 3 },
    { src: thriill4, key: 4 },
    { src: thriill5, key: 5 },
    { src: thriill6, key: 6 },
    { src: thriill7, key: 7 },
];

function Screenshots() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => setAnimating(false), 500); // animation duration of 0.5s
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => setAnimating(false), 500);
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const getPreviousIndex = () => {
        return activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    };

    const getNextIndex = () => {
        return activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    };

    return (
        <div className='screenshot' id='screenshots'>
            <div><h1>Screenshots</h1></div>
            <div className='carousel-container'>
                <div className={`carousel-image previous ${animating ? 'animating' : ''}`}>
                    <img src={items[getPreviousIndex()].src} alt="Previous" height={'400px'} />
                </div>
                <div className={`carousel-image active ${animating ? 'animating' : ''}`}>
                    <img src={items[activeIndex].src} alt="Active" height={'600px'} />
                </div>
                <div className={`carousel-image next ${animating ? 'animating' : ''}`}>
                    <img src={items[getNextIndex()].src} alt="Next" height={'400px'} />
                </div>
            </div>
            <div>
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            </div>
            <div>
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
            </div>
        </div>
    );
}

export default Screenshots;
