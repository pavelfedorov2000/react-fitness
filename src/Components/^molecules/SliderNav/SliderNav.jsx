import classNames from 'classnames';
import React from 'react';

function SliderNav({ className, brs, bg, total }) {
    return (
        <div className={classNames('slider-nav', className, bg && `slider-nav--style_bg-${bg}`, {
            'slider-nav--brs': brs
        })}>
            <div className="splide__arrows slider-nav__arrows">
                <button className="splide__arrow splide__arrow--prev slider-nav__arrow slider-nav__arrow--prev" type="button"
                    aria-label="Предыдущий слайд">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.22386 11.1527L15.833 11.1527L15.833 8.84706L8.22609 8.84706L11.487 5.60412L10.0415 4.16663L4.1867 9.98922L4.16634 10.0091L4.16653 10.0093L4.16634 10.0095L5.61179 11.447L5.61662 11.4422L10.0605 15.8333L11.5198 14.4096L8.22386 11.1527Z" />
                    </svg>
                </button>
                <button className="splide__arrow splide__arrow--next slider-nav__arrow slider-nav__arrow--next" type="button"
                    aria-label="Следующий слайд">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M11.7761 8.84729L4.16699 8.84729L4.16699 11.1529L11.7739 11.1529L8.51302 14.3959L9.95848 15.8334L15.8134 10.0107L15.8337 9.99092L15.8335 9.99073L15.8337 9.99053L14.3882 8.55304L14.3834 8.55785L9.93954 4.16673L8.48016 5.59042L11.7761 8.84729Z" />
                    </svg>
                </button>
            </div>
            <div className="slider-nav__counter--current"></div>
            <div className="slider-nav__progress">
                <div className="slider-nav__progress-bar"></div>
            </div>
            <div className="slider-nav__counter--total">0{total}</div>
        </div>
    );
}

export default SliderNav;