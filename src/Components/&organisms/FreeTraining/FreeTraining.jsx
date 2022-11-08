import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Img, List, Title } from '../../@atoms';
import { TextBlock } from '../../^molecules';
import Video from '../../^molecules/Video/Video';
import freeTrainingBg from '../../../assets/img/decor/free-training-bg.svg';
import freeTrainingDecor from '../../../assets/img/decor/free-training-decor.svg';

function FreeTraining() {
    const [freeTraining, loading, error] = useRequest(requestFreeTraining);

    function requestFreeTraining() {
        return axios.get('http://localhost:3001/free_training');
    }

    return (
        freeTraining && <section className="free-training" style={{backgroundImage: `url(${freeTrainingBg})`}}>
            <div className="container">
                <div className="section-body free-training__content">
                    <Title className="free-training__title" level="2" text={freeTraining.title.text} sectionTitle />
                    <TextBlock className="free-training__text" items={freeTraining.textBlock.items} />
                    <div className="free-training__img">
                        <Img src={freeTraining.img.src} width="348" height="491" />
                    </div>
                    <Video className="free-training" {...freeTraining.video} videoDecor={freeTrainingDecor} infoColor="white" />
                    <div className="free-training__list-wrap">
                        <div className="free-training__list-title">
                            Приходите на бесплатную
                            тренировку и вам:
                        </div>
                        <List items={freeTraining.list.items} gap="xl" count />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FreeTraining;