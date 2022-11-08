import classNames from 'classnames';
import React from 'react';

function Suptitle({color, text}) {
    return (
        <span className={classNames('suptitle', color && `suptitle--${color}`)}>
            {text}
        </span>
    );
}

export default Suptitle;