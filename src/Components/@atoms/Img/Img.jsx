import classNames from 'classnames';
import React from 'react';

function Img({ src, alt, width, height, cover, contain, className }) {
    return (
        <img className={classNames('', className, {
            'img-cover': cover,
            'img-contain': contain
        })} src={src} alt={alt || 'фото'} width={width || null} height={height || null} loading="lazy" />
    );
}

export default Img;