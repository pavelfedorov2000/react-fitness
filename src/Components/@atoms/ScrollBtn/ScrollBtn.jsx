import classNames from 'classnames';
import React from 'react';
import ScrollBtnArrow from '../../../assets/img/icons/ScrollBtnArrow';

function ScrollBtn({ modifier, className }) {
    return (
        <button className={classNames('scroll-btn', modifier && `scroll-btn${modifier}`, className && `${className}__scroll-btn`)}
            type="button"
            aria-label="Скроллить вниз">
            {Array(3).fill(0).map((_, i) => <ScrollBtnArrow key={i} className="scroll-btn__arrow" />)}
        </button>
    );
}

export default ScrollBtn;