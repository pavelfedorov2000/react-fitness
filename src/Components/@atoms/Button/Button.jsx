import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({ onClick, className, text, bg, icon, to, transparent, border, type }) => {
    return (
        to === undefined ?
            <button
                onClick={onClick}
                className={classNames('btn', className, {
                    'btn--border': border,
                    'btn--transparent': transparent,
                    'button--style_bg-accent': bg === 'accent',
                })} type={type ? type : 'button'}>
                <span className="btn__text">{text}</span>
            </button>
            :
            to === '#' ?
                <a href={to} className={classNames('btn', className, {
                    'btn--border': border,
                    'btn--transparent': transparent,
                    'button--style_bg-accent': bg === 'accent',
                })}>
                    <span className="btn__text">{text}</span>
                </a>
                :
                <Link className={classNames('btn', className, {
                    'btn--border': border,
                    'btn--transparent': transparent,
                    'button--style_bg-accent': bg === 'accent',
                })}>
                    <span className="btn__text">{text}</span>
                </Link>
    );
}

export default Button;