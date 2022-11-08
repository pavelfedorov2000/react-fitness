import classNames from 'classnames';
import React from 'react';
import { DateTime, Phone } from '../../@atoms';

function Leader({className, items}) {
    return (
        <dl className={classNames('leader', className && `${className}`)}>
            {items.map(item => (
                <div key={item.id} className={className && `${className}-item`}>
                    <dt>{item.key}</dt>
                    <dd>
                        {item.value.datetime ?
                            <DateTime value={item.value.datetime} />
                            : item.value.phone ? <Phone number={item.value.phone} />
                            : item.value.items ? item.value.items.map(el => <span key={el.text.toString()}>{el.text}</span>)
                            : item.value
                        }
                    </dd>
                </div>
            ))}
        </dl>
    );
}

export default Leader;