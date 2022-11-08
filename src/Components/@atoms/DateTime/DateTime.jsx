import classNames from 'classnames';
import React from 'react';

function DateTime({ date, className }) {
    return (
        <time className={classNames('date', className)} dateTime={date.split('.').reverse().join('-')}>{date}</time>
    );
}

export default DateTime;