import classNames from 'classnames';
import React from 'react';
import { FormAgree } from '../../@atoms';
import { Form, TextBlock } from '../../^molecules';
import Contacts from '../../^molecules/Contacts/Contacts';

function FormBlock({ className, formClassName, text, form }) {
    
    return (
        <div className={classNames('form-block', className)}>
            {text && <TextBlock className="form-block__text" items={text.items} />}

            <Form className="form-block__form free-training-recording__form" formClassName={formClassName} {...form} />

            {form.agree && <FormAgree className="form-block__form-agree" />}

            <Contacts className="form-block__contacts" />
        </div>
    );
}

export default FormBlock;