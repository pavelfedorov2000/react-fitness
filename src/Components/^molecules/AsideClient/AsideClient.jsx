import classNames from 'classnames';
import React from 'react';
import { Img } from '../../@atoms';
import maleClient from '../../../assets/img/aside-clients/man.jpg';
import femaleClient from '../../../assets/img/aside-clients/woman.jpg';

function AsideClient({className, reverse, position, gender, name, src }) {
    return (
        <aside className={classNames('aside-client', className, position && `aside-client--position_${position}`, {
            'aside-client--reverse': reverse
        })}>
            <figure className="aside-client__body">
                {name &&
                    <figcaption className="aside-client__descr">
                        Постоянный клиент клуба<br />
                        {name}
                    </figcaption>
                }
                <div className="aside-client__img">
                    <Img src={src ? src : (gender === 'male' ? maleClient : femaleClient)} alt="фото" width="200" height="480" />
                </div>
            </figure>
        </aside>
    );
}

export default AsideClient;