import classNames from 'classnames';
import React from 'react';
import circleImg from '../../../assets/img/circle-text.svg';
import { Img } from '../../@atoms';

function CircleText({className}) {
    return (
        <div className={classNames('circle-text', className)}>
            <Img className="circle-text__img" src={circleImg} width="220" height="220" />
        </div>
    );
}

export default CircleText;