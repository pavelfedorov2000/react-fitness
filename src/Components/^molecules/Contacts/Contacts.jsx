import React from 'react';
import { Phone } from '../../@atoms';
import Messangers from '../Messangers/Messangers';

function Contacts({ messangers, phone }) {
    return (
        <div className="contacts">
            {messangers && <Messangers className="form-block__messangers" {...messangers} />}

            {phone && <Phone className="form-block__contact" number={phone} />}
        </div>
    );
}

export default Contacts;