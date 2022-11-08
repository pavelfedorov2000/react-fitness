import React from 'react';
import burgerIcon from '../../../assets/img/icons/burger.svg';
import closeIcon from '../../../assets/img/icons/close.svg';
import Img from '../Img/Img';

function BurgerBtn() {
    return (
        <button className="burger-btn" type="button" aria-label="Открыть меню">
            <Img src={burgerIcon} className="js-open" alt="бургер-меню" width="24" height="24" />
            <Img src={closeIcon} className="js-close" alt="крестик" width="24" height="24" />
        </button>
    );
}

export default BurgerBtn;