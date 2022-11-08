import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Marquee } from '../../@atoms';
import { AsideClients, SaleArticle, Slider } from '../../^molecules';

function Sale() {
    const [sale, loading, error] = useRequest(requestSale);

    function requestSale() {
        return axios.get('http://localhost:3001/sale');
    }

    return (
        <section className="sale">
            <div className="container sale__grid">
                <Marquee className="sale__marquee" color="yellow" />
                <div className="sale__body">
                    {sale && <Slider className="sale__slider" sliderData={sale.slider} sliderNavClass="sale__slider-nav" />}
                </div>
                <AsideClients className="sale__rightside" />
            </div>
        </section>
    );
}

export default Sale;