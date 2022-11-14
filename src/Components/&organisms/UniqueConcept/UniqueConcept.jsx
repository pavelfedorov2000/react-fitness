import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Img, Title } from '../../@atoms';
import AsideClient from '../../^molecules/AsideClient/AsideClient';
import CircleText from '../../^molecules/CircleText/CircleText';
import Form from '../../^molecules/Form/Form';
import TextBlock from '../../^molecules/TextBlock/TextBlock';
import Video from '../../^molecules/Video/Video';

function UniqueConcept() {
    const [uniqueConcept, loading, error] = useRequest(requestuniqueConcept);

    function requestuniqueConcept() {
        return axios.get('http://localhost:3001/unique_concept');
    }

    return (
        uniqueConcept && <section className="unique-concept">
            <div className="container unique-concept__inner">
                <AsideClient className="unique-concept__aside-client" {...uniqueConcept.asideClient} reverse />
                <div className="section-body unique-concept__body">
                    <Title className="unique-concept__title" level="2" {...uniqueConcept.title} sectionTitle />
                    <TextBlock className="unique-concept__text" {...uniqueConcept.textBlock} />
                    <div className="unique-concept__img">
                        <Img {...uniqueConcept.img} width="480" height="631" />
                        <CircleText className="unique-concept__circle-text" />
                    </div>
                    <Video className="unique-concept" {...uniqueConcept.video} />
                    <Form className="unique-concept__form" {...uniqueConcept.form} />
                </div>
            </div>
        </section>
    );
}

export default UniqueConcept;