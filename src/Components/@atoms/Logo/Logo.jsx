import classNames from 'classnames';
import React from 'react';
import LogoSvg from '../../../assets/img/logo/Logo';

function Logo({className, text}) {
    return (
        <div className={classNames('logo', className)}>
            <LogoSvg />
            {text && <div className="logo__text">{text}</div>}
        </div>
    );
}

export default Logo;