import classNames from 'classnames';
import React from 'react';
import { Facebook, Instagram, Vk, YouTube } from '../../../assets/img/icons/socials';

function Social({className}) {
    const socials = [{
        name: 'vk',
        svg: Vk,
        href: 'https://vk.com/club72730065'
    }, {
        name: 'youtube',
        svg: YouTube,
        href: 'https://www.youtube.com/channel/UC8evvdyI03ojn0Q1cc-KsPA',
    }, {
        name: 'fb',
        svg: Facebook,
        href: 'https://www.facebook.com/fitnesson.love/'
    }, {
        name: 'inst',
        svg: Instagram,
        href: 'https://instagram.com/fitnesson_mz?igshid=YmMyMTA2M2Y='
    }];
    
    return (
        <ul className={classNames('social', className)}>
            {socials.map(soc => (
                <li key={soc.name} className={`social__item social__item--${soc.name}`}>
                    <a href={soc.href} className="social__link">
                        <soc.svg />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Social;