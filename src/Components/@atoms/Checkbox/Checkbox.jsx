import React from 'react';

function Checkbox() {
    return (
        <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <span className="checkbox__style"></span>
            <span className="checkbox__text"></span>
        </label>
    );
}

export default Checkbox;