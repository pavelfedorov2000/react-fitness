import classNames from 'classnames';
import React from 'react';

function DecorTitle({className, bg, text}) {
    return (
        <div className={classNames('decor-title', className, bg && `decor-title--style_bg-${bg}`)}>{ text }</div>
    );
}

export default DecorTitle;