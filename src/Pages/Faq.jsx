import axios from 'axios';
import React from 'react';
import { FaqSection } from '../Components/&organisms';
import PromoFaq from '../Components/&organisms/PromoFaq/PromoFaq';
import { AsideClient } from '../Components/^molecules';
import { useRequest } from '../hooks';

function Faq() {
    const [faq, loading, error] = useRequest(requestfaq);

    function requestfaq() {
        return axios.get('http://localhost:3001/faq');
    }

    return (
        faq && <main className="page">
            <PromoFaq {...faq.promo} />

            <div className="faq-body container">
                <AsideClient {...faq.asideClient} />

                <div className="section-body faq-body__content">
                    {faq.content.items.map(section => (
                        <FaqSection key={section.id} {...section} />
                    ))}
                </div>

                <AsideClient />
            </div>
        </main>
    );
}

export default Faq;