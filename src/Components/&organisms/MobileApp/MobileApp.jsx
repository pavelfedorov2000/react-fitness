import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Img, Title } from '../../@atoms';
import { Apps, TextBlock } from '../../^molecules';
import iPhone from '../../../assets/img/iphone.png';
import mobileAppDecor from '../../../assets/img/elements/mobile-app-elements.svg';

function MobileApp() {
    const [mobileApp, loading, error] = useRequest(requestMobileApp);

    function requestMobileApp() {
        return axios.get('http://localhost:3001/mobile_app');
    }

    return (
        mobileApp && <section className="mobile-app" style={{backgroundImage: `url(${mobileAppDecor})`}}>
            <div className="container mobile-app__container">
                <div className="mobile-app__bg">
                    <Img src={mobileApp.img.src}
                        width="1920"
                        height="424" />
                </div>
                <div className="section-body mobile-app__content">
                    <Title className="mobile-app__title" level="2" text={mobileApp.title.text} sectionTitle />
                    <div className="mobile-app__img">
                        <Img src={iPhone}
                            alt="iphone"
                            width="435"
                            height="870" />
                    </div>
                    <TextBlock className="mobile-app__text" items={mobileApp.textBlock.items} />
                    <Apps className="mobile-app__download" radius />
                </div>
            </div>
        </section>
    );
}

export default MobileApp;