import classNames from 'classnames';
import React from 'react';

function DateTime({ date, time, text, className }) {
    return (
        <time className={classNames('date', className)} dateTime={time ? `${date} ${time}` : text && text.split('.').reverse().join('-')}>{text}</time>
    );
}

export default DateTime;