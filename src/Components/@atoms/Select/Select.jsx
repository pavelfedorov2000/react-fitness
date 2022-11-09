import classNames from 'classnames';
import React from 'react';
import dropArrow from '../../../assets/img/icons/drop.svg';
import SelectOption from '../SelectOption/SelectOption';

function Select({ className, placeholder, options, fieldBg }) {
    const [activeSelect, setActiveSelect] = React.useState(false);

    const handleSelectActive = () => {
        setActiveSelect(!activeSelect);
    }

    const [selectTitle, setSelectTitle] = React.useState(placeholder);

    const [checkedOption, setCheckedOption] = React.useState(0);

    const handleSelectOption = (index) => {
        setCheckedOption(index);
        console.log(checkedOption);
        //console.log(selectTitle);
    }

    const generateSelectTitle = () => options.items.find(option => option.id == checkedOption).text;

    return (
        <div class={classNames('select', className, fieldBg && `select--style_bg-${fieldBg}`)}>
            <div onClick={handleSelectActive} class={classNames('select__title', {
                'active': activeSelect
            })}>
                <span className="select__title-value">{generateSelectTitle() || placeholder}</span>
                <span className="select__title-icon" style={{backgroundImage: `url(${dropArrow})`}}></span>
            </div>
            <div class={classNames('select__content', {
                'active': activeSelect
            })}>
                {options && options.items && options.items.map((option, i) => (
                    <div key={option.id} className="select__option">
                        <input onChange={() => handleSelectOption(i)} id={`${options.name}${i}`} className="select__input" type="radio" name={options.name} checked={i === checkedOption ? true : false} />
                        <label htmlFor={`${options.name}${i}`} tabIndex="0" className="select__label">{option.text}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Select;