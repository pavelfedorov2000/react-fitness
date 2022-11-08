import classNames from 'classnames';
import React from 'react';

function FormAgree({className}) {
    return (
        <p class={classNames('form-agree', className)}>
            Отправляя заявку вы соглашаетесь
            с условиями обработки персональных данных
        </p>
    );
}

export default FormAgree;