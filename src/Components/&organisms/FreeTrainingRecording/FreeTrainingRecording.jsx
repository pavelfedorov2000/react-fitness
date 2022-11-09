import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Title } from '../../@atoms';
import FormBlock from '../FormBlock/FormBlock';
import freeTrainingElements from '../../../assets/img/elements/free-training-elements.svg';

function FreeTrainingRecording() {
    const [freeTrainingRecording, loading, error] = useRequest(requestFreeTrainingRecording);

    function requestFreeTrainingRecording() {
        return axios.get('http://localhost:3001/free_training_recording');
    }

    return (
        freeTrainingRecording && <section id="free-training-recording" className="free-training-recording" style={{backgroundImage: `url(${freeTrainingElements})`}}>
            <div className="container free-training-recording__container">
                <div className="section-body">
                    <Title className="free-training-recording__title" level="2" text={freeTrainingRecording.title.text} sectionTitle />

                    <FormBlock className="free-training-recording__inner" formClassName="free-training-recording__form" {...freeTrainingRecording.form} text={freeTrainingRecording.textBlock} form={freeTrainingRecording.form} />
                </div>
            </div>
        </section>
    ); 
}

export default FreeTrainingRecording;