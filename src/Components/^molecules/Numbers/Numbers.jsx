import classNames from 'classnames';
import React from 'react';

function Numbers({ numbers, className }) {
    return (
        <div className={classNames('numbers', className && className)}>
            {numbers && numbers.items.map(number => (
                <div key={number.title.text.toString()} className="numbers__item">
                    <div className="numbers__item-num">{number.title.text}</div>
                    <div className="numbers__item-descr">{number.descr}</div>
                </div>
            ))}
        </div>
    );
}

export default Numbers;