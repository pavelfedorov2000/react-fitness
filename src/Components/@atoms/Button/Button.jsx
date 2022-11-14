import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({ onClick, className, text, bg, to, transparent, border, type }) => {
    return (
        to === undefined ?
            <button
                onClick={onClick}
                className={classNames('btn', className, bg && `btn--style_bg-${bg}`, {
                    'btn--with_border': border,
                    'btn--transparent': transparent,
                })} type={type ? type : 'button'}>
                <span className="btn__text">{text}</span>
            </button>
            :
            to === '#' ?
                <a href={to} className={classNames('btn', className, bg && `btn--style_bg-${bg}`, {
                    'btn--with_border': border,
                    'btn--transparent': transparent,
                })}>
                    <span className="btn__text">{text}</span>
                </a>
                :
                <Link className={classNames('btn', className, bg && `btn--style_bg-${bg}`, {
                    'btn--with_border': border,
                    'btn--transparent': transparent,
                })}>
                    <span className="btn__text">{text}</span>
                </Link>
    );
}

export default Button;