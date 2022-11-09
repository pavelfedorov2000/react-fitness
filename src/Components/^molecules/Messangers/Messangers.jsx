import classNames from 'classnames';
import React from 'react';
import Messanger from '../../@atoms/Messanger/Messanger';
import { Telegram, WhatsApp } from '../../../assets/img/icons/messangers';

function Messangers({ className, messangers }) {
    const messangersObj = messangers.map(item => {
        return {
            ...item,
            svg: item.name === 'Telegram' ? Telegram : WhatsApp
        }
    });

    return (
        <div className={classNames('messangers', className)}>
            {messangersObj.map(messanger => (
                <Messanger key={messanger.name} messanger={messanger} />
            ))}
        </div>
    );
}

export default Messangers;