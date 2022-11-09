import axios from 'axios';
import classNames from 'classnames';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Phone } from '../../@atoms';
import Messangers from '../Messangers/Messangers';

function Contacts({ className }) {
    const [contacts, loading, error] = useRequest(requestContacts);

    function requestContacts() {
        return axios.get('http://localhost:3001/contacts');
    }

    return (
        contacts && <div className={classNames('contacts', className)}>
            {contacts.messangers && <Messangers className="form-block__messangers" messangers={contacts.messangers.items} />}

            {contacts.phone && <Phone className="form-block__contact contact" number={contacts.phone} />}
        </div>
    );
}

export default Contacts;