import axios from 'axios';
import classNames from 'classnames';
import React from 'react';
import { useRequest } from '../../../hooks';
import { Img } from '../../@atoms';
import appStore from '../../../assets/img/logo/apps/appstore.svg';
import gogglePlay from '../../../assets/img/logo/apps/googleplay.svg';

function Apps({className, radius }) {
    const [apps, loading, error] = useRequest(requestApps);

    function requestApps() {
        return axios.get('http://localhost:3001/apps');
    }

    return (
        <div className={classNames('apps', className)}>
            {apps && apps.items.map(app => (
                <a key={app.title.toString()} href={app.href}
                    target="_blank"
                    className={classNames('apps__item', `apps__item--${app.title}`, {
                        'apps__item--radius': radius
                    })}>
                    <Img src={app.title === 'appstore' ? appStore : gogglePlay} alt={app.title} />
                </a>
            ))}
        </div>
    );
}

export default Apps;