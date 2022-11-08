import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Img, Marquee, ScrollBtn, Title } from '../../@atoms';
import { BoxLink, Numbers } from '../../^molecules';

function Promo() {
    const [promo, loading, error] = useRequest(requestPromo);

    function requestPromo() {
        return axios.get('http://localhost:3001/promo');
    }

    let promoContent = promo && promo.content;

    /* if (!loading && !error) {
        promoContent = promo && promo.content;
    } */

    return (
        promo && <section className="promo">
            <div className="promo__bg promo-bg">
                <Img src={promo.img.src} alt="фитнес парень и девушка" width="1920" height="960" />
            </div>
            <div className="promo__body container promo-body">
                <ScrollBtn />
                {promo.content &&
                    <div className="promo__content">
                        <Title className="promo__title" level="1" text={promoContent.title.text} sectionTitle={true} />
                        <BoxLink className="promo" text={promoContent.boxLink.text} anchor="form" />
                        <Numbers numbers={promoContent.numbers} />
                    </div>
                }
                <Marquee />
            </div>
        </section>
    );
}

export default Promo;