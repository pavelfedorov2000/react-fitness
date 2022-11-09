import classNames from 'classnames';
import React from 'react';
import LogoSvg from '../../../assets/img/logo/Logo';
import Img from '../Img/Img';

function Logo({className, imgClassName, src, width, height, text}) {
    return (
        <div className={classNames('logo', className)}>
            {src ? <Img className={imgClassName ? imgClassName : null} src={src} alt="лого" width={width} height={height} /> : <LogoSvg />}
            {text && <div className="logo__text">{text}</div>}
        </div>
    );
}

export default Logo;