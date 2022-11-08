import React, { useRef } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SaleArticle from '../SaleArticle/SaleArticle';
import SliderNav from '../SliderNav/SliderNav';

function Slider({ className, options, sliderData, sliderNavClass }) {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    function initSliderNav(sliderBar, sliderLength, currentSlide, totalSlides) {
        sliderBar.style.width = String(100 * (activeIndex + 1) / sliderLength) + '%';
        currentSlide.textContent = `0${activeIndex + 1}`;
        totalSlides.textContent = `0${sliderLength}`;
    }

    React.useEffect(() => {
        if (sliderRef.current) {
            //console.log('slider mounted');
            const slider = sliderRef.current.splide;
            const sliderLength = slider.length;
            const sliderBar = slider.root.querySelector('.slider-nav__progress-bar');
            const sliderCurrentSlide = slider.root.querySelector('.slider-nav__counter--current');
            const sliderTotalSlides = slider.root.querySelector('.slider-nav__counter--total');

            setActiveIndex(slider.index);

            initSliderNav(sliderBar, sliderLength, sliderCurrentSlide, sliderTotalSlides);
        }
    }, []);

    React.useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current.splide;
            const sliderLength = slider.length;
            const sliderBar = slider.root.querySelector('.slider-nav__progress-bar');
            const sliderCurrentSlide = slider.root.querySelector('.slider-nav__counter--current');
            const sliderTotalSlides = slider.root.querySelector('.slider-nav__counter--total');

            slider.on('move', function () {
                //console.log('slider moved');
                setActiveIndex(slider.index);
                initSliderNav(sliderBar, sliderLength, sliderCurrentSlide, sliderTotalSlides);
            });
        }
    }, [activeIndex]);

    const sliderOptions = {
        speed: 1000,
        type: 'loop',
        classes: {
            arrows: 'splide__arrows slider-nav__arrows',
            arrow: 'splide__arrow slider-nav__arrow',
            prev: 'splide__arrow--prev slider-nav__arrow--prev',
            next: 'splide__arrow--next slider-nav__arrow--next',
            //pagination: 'slider-nav__pagination'
        },
        pagination: false
    };

    return (
        <Splide ref={sliderRef} className={className ? className : null} hasTrack={false} options={options ? Object.assign({}, sliderOptions, options) : sliderOptions}>
            <SplideTrack>
                {sliderData.items.map((item, index) => (
                    <SplideSlide key={item.id}>
                        <SaleArticle article={item} />
                    </SplideSlide>
                ))}
            </SplideTrack>
            <SliderNav className={sliderNavClass} />
        </Splide>
    );
}

export default Slider;