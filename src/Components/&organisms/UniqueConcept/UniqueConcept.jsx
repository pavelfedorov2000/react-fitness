import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import Video from '../../^molecules/Video/Video';

function UniqueConcept() {
    const [uniqueConcept, loading, error] = useRequest(requestuniqueConcept);

    function requestuniqueConcept() {
        return axios.get('http://localhost:3001/unique_concept');
    }

    return (
        <section class="unique-concept">
            <div class="container unique-concept__inner">
                <div class="section-body unique-concept__body">
                    <div class="section-text unique-concept__text">
                        <p>
                            Мы поняли, что классические фитнес клубы отлично зарабатывают деньги владельцу, но забывают
                            о результатах клиентов, поэтому неэффективны.
                        </p>
                        <p>
                            Мы изменили подход, придумали фитнес клуб заново.
                            Создали концепцию, где наши клиенты добиваются результатов и обретают желанную форму. В каждую карту
                            включен тренер наставник. Диагностируем, составляем план тренировок и питания. Следим за успехами и
                            корректируем цели клиентов. Разработали собственное фитнес приложение.
                        </p>
                        <p>
                            FITNESSON — это уникальный фитнес клуб,
                            аналогов которому нет в России.
                        </p>
                    </div>
                    <div class="unique-concept__img">

                        <div class="circle-text unique-concept__circle-text">
                            <img class="circle-text__img" src="assets/images/circle-text.svg" alt="фото" width="220"
                                height="220" loading="lazy" />
                        </div>
                    </div>
                    <Video className="unique-concept__video" />
                </div>
            </div>
        </section>
    );
}

export default UniqueConcept;