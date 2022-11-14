import React from 'react';
import FaqItem from '../FaqItem/FaqItem';

function FaqList({ items }) {
    return (
        <ul className="faq-list">
            {items.map(item => (
                <FaqItem key={item.id} {...item} />
            ))}
        </ul>
    );
}

export default FaqList;