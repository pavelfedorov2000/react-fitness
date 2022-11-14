import classNames from 'classnames';
import React from 'react';
import searchIcon from '../../../assets/img/icons/search.svg';

function Input({className, name, type, placeholder, required, fieldBg, inputType }) {
    return (
        <input className={classNames('input', fieldBg && `input--style_bg-${fieldBg}`, name && `${className}--${name}`, inputType && `input--type_${inputType}`)} placeholder={placeholder} type={type ? type : 'text'} required={required ? true : false} style={{backgroundImage: inputType === 'search' ? `url(${searchIcon})` : null}} />
    );
}

export default Input;