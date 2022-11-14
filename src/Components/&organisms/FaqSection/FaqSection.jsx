import React from 'react';
import { Title } from '../../@atoms';
import { FaqList } from '../../^molecules';

function FaqSection({ title, accordion }) {
    return (
        <section className="faq-section">
            <Title className="faq-section__title" level="2" {...title} />
            <FaqList {...accordion} />
        </section>
    );
}

export default FaqSection;