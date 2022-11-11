import classNames from 'classnames';
import React from 'react';

function Badge({className, text, bg }) {
    return (
        <span className={classNames('badge', className, bg && `badge--style_bg-${bg}`)}>{text}</span>
    );
}

export default Badge;