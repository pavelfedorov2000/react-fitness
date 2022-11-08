import classNames from 'classnames';
import React from 'react';

function DateTime({ value, className }) {
    const {date, time, text} = value;
    console.log(date, time);

    return (
        <time className={classNames('date', className)} dateTime={`${date} ${time}`}>{text}</time>
    );
}

export default DateTime;