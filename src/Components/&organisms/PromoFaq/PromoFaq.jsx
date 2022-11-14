import React from 'react';
import { DecorTitle, Input, Title } from '../../@atoms';
import elements from '../../../assets/img/elements/faq.svg';

function PromoFaq({ decorTitle, title, searchInput }) {
    return (
        <div className="promo-faq container" style={{backgroundImage: `url(${elements})`}}>
            {decorTitle && <DecorTitle className="promo-faq__decor-title" {...decorTitle} />}
            <div className="section-body promo-faq__content">
                {title && <Title className="promo-faq__title" level="1" {...title} />}
                {searchInput && <Input className="promo-faq__input" fieldBg="light-blue" inputType="search" {...searchInput} />}
            </div>
        </div>
    );
}

export default PromoFaq;