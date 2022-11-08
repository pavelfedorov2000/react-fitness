import classNames from 'classnames';
import React from 'react';
import { Button, Img, Title } from '../../@atoms';
import { Leader, TextBlock } from '../../^molecules';

function EventBlock({className, img, title, textBlock, leader, btn}) {
    return (
        <article className={classNames('event-block', className)}>
            <div className="event-block__img">
                <Img src={img.src} width="556" height="528" />
            </div>
            <div className="event-block__content">
                <div className="event-block__content-inner">
                    {title && <Title className="event-block__title" level="3" text={title.text} />}
                    {textBlock && <TextBlock className="event-block__text" items={textBlock.items} />}
                    {leader && <Leader className="event-block__list" items={leader.items} />}
                    {btn && <Button className="event-block__btn" text={btn.text} />}
                </div>
            </div>
            {btn && <Button className="event-block__btn" text={btn.text} />}
        </article>
    );
}

export default EventBlock;