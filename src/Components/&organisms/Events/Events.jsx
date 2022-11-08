import axios from 'axios';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Suptitle, Title } from '../../@atoms';
import { SectionTop } from '../../^molecules';
import EventBlock from '../EventBlock/EventBlock';

function Events() {
    const [events, loading, error] = useRequest(requestEvents);

    function requestEvents() {
        return axios.get('http://localhost:3001/events');
    }

    return (
        events && <section id="events" className="events-section">
            <div className="container events-section__container">
                <div className="section-body events-section__body">
                    {events.top &&
                        <SectionTop className="events-section__top" {...events.top} />
                    }
                    <div className="events-section__content-body">
                        {events.items.map(event => (
                            <EventBlock className="events-section__content" img={event.img} {...event.content} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;