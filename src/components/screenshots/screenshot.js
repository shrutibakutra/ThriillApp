import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import './screenshot.scss';

import thriill1 from "../../assets/thriill1.png";
import thriill2 from "../../assets/thriill2.png";
import thriill3 from "../../assets/thriill3.png";
import thriill4 from "../../assets/thriill4.png";
import thriill5 from "../../assets/thriill5.png";

const items = [
    { src: thriill1, key: 1 },
    { src: thriill2, key: 2 },
    { src: thriill3, key: 3 },
    { src: thriill4, key: 4 },
    { src: thriill5, key: 5 },
];
const mobilescreen = window.screen.availWidth < 700;

const Screenshot = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const getPreviousIndex = () => {
        return activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    };

    const getNextIndex = () => {
        return activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    };

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                {mobilescreen ? (
                    <div className="mobile-frame--mobile">
                        <img src={items[activeIndex].src} className='mobile-view' />
                    </div>
                ) : (
                    <div className='carousel-images'>
                         <div className="mobile-frame--small">
                            <img src={items[getPreviousIndex()].src} className='carousel-images__side' />
                        </div>
                        <div className="mobile-frame">
                            <img src={items[activeIndex].src} className='mobile-view carousel-images__center' />
                        </div>
                        <div className="mobile-frame--small">
                        <img src={items[getNextIndex()].src} height={'400px'} className='carousel-images__side' />
                        </div>
                    </div>
                )}
            </CarouselItem>
        );
    });

    return (
        <div id='screenshots' className='screenshot'>
            <div><h1>Screenshots</h1></div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                fade
                slide
                controls
                show={3}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                    className='screenshot__scroll'
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
};

export default Screenshot;