import classNames from 'classnames';
import React from 'react';
import { Img } from '../../@atoms';
import maleClient from '../../../assets/img/aside-clients/man.jpg';
import femaleClient from '../../../assets/img/aside-clients/woman.jpg';

function AsideClient({className, direction,  gender, name }) {
    return (
        <figure className={classNames('aside-client', className, direction && `aside-client--${direction}`)}>
            {name &&
                <figcaption className="aside-client__descr">
                    Постоянный клиент клуба<br />
                    {name}
                </figcaption>
            }
            <div className="aside-client__img">
                <Img src={gender === 'male' ? maleClient : femaleClient} alt="фото" width="200" height="480" />
            </div>
        </figure>
    );
}

export default AsideClient;