import classNames from 'classnames';
import React from 'react';

function Marquee({ color, className }) {
    return (
        <div className={classNames('promo-marquee vertical-marquee', className, color && `vertical-marquee--style_color-${color}`)}>
            {Array(3).fill(0).map((_, i) => (
                <p key={i + 1}>
                    <span className="ttu">Fitnession.</span> Эффективно
                </p>
            ))}
        </div>
    );
}

export default Marquee;