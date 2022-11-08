import React from 'react';

function Radio() {
    return (
        <label className="radio">
            <input className="radio__input" type="radio" />
            <span className="radio__style"></span>
            <span className="radio__text"></span>
        </label>
    );
}

export default Radio;