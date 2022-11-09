import classNames from 'classnames';
import React from 'react';
import Phone from '../Phone/Phone';

function Contact({ className, phone, email }) {
    return (
        phone ? <Phone className={classNames('contact', className)} number={phone} /> : <a href={email ? `mailto:${email}` : '#'} className={classNames('contact', className)}>{email}</a>
    );
}

export default Contact;