import classNames from 'classnames';
import React from 'react';
import { ArrowBtn, Img } from '../../@atoms';
import asideClientsImg from '../../../assets/img/aside-clients/cheeks.jpg';

function AsideClients({ className }) {
    return (
        <div className={classNames('aside-clients', className)}>
            <div className="aside-clients__img">
                <Img src={asideClientsImg} width="200" height="800" />
                <ArrowBtn />
            </div>
        </div>
    );
}

export default AsideClients;