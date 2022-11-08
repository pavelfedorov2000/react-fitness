import classNames from 'classnames';
import React from 'react';

function Phone({ className, number }) {
    return (
        <a className={classNames('phone', className)} href={`tel:${number.split(' ').map(item => item.split('').filter(el => el !== '(' && el !== ')' && el !== '-').join('')).join('')}`}>{number}</a>
    );
}

export default Phone;