import classNames from 'classnames';
import React from 'react';

function DoubleMarquee({modifier}) {
    return (
        <div class={classNames('double-marquee', modifier && `double-marquee--${modifier}`)}>
            {Array(2).fill(0).map((_, i) => (
                <div class={classNames('double-marquee__line', {
                    'double-marquee__line--top': i === 0,
                    'double-marquee__line--bottom': i === 1,
                })}>
                    {Array(2).fill(0).map(_ => (
                        (i === 0 ?
                            <p>
                                Свое
                                <span>Крутое приложение!</span>
                                Собственная команда разработчиков. Доступность
                            </p>
                            :
                            <p>
                                Цель, тренировочный план, программа питания.
                                <span>Связь с тренером, напоминания </span>
                            </p>
                        )
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DoubleMarquee;