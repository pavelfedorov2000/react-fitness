import classNames from 'classnames';
import React from 'react';
import { Img, PlayerBtn } from '../../@atoms';

function Video({ className, video }) {
    return (
        <figure className={classNames('video', className)}>
            <div className="video__body unique-concept__video-body">
                <div className="video__bg">
                    <Img src={video.img.src} width="632" height="382" />
                </div>
                <PlayerBtn className="video__player" />
                <a className="full-link" href={video.href}
                    target="_blank" aria-label="Смотреть видео"></a>
            </div>
            {video.info &&
                <figcaption className="video__info">
                    {video.info.items.map(item => (
                        <span key={item.text.toString()}>{item.text}</span>
                    ))}
                </figcaption>
            }
        </figure>
    );
}

export default Video;