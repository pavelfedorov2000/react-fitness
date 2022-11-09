import classNames from 'classnames';
import React from 'react';

function Input({className, name, type, placeholder, required, fieldBg }) {
    return (
        <input className={classNames('input', fieldBg && `input--style_bg-${fieldBg}`, name && `${className}--${name}`)} placeholder={placeholder} type={type ? type : 'text'} required={required ? true : false} />
    );
}

export default Input;