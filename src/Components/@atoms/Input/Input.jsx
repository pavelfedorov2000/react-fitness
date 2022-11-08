import classNames from 'classnames';
import React from 'react';

function Input({ type, placeholder, required, fieldBg }) {
    return (
        <input className={classNames('input', fieldBg && `input--style_bg-${fieldBg}`)} placeholder={placeholder} type={type ? type : 'text'} required={required ? true : false} />
    );
}

export default Input;