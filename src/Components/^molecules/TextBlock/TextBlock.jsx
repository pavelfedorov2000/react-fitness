import classNames from 'classnames';
import React from 'react';

function TextBlock({ className, items }) {
    return (
        <div className={classNames('section-text', className)}>
            {items.map(p => (
                <p style={{fontWeight: p.bold ? '500' : '400'}} key={p.id}>{p.text}</p>
            ))}
        </div>
    );
}

export default TextBlock;