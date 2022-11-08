import classNames from 'classnames';
import React from 'react';
import { Img, PlayerBtn } from '../../@atoms';
import BoxLink from '../BoxLink/BoxLink';

function Video({ className, img, href, info, box, videoDecor, infoColor }) {
    return (
        <figure className={classNames('video', className && `${className}__video`)}>
            {videoDecor && <Img className={`${className}__video-decor`} src={videoDecor} width="475" height="354" />}
            <div className={classNames('video__body', className && `${className}__video-body`)}>
                <div className="video__bg">
                    <Img src={img.src} width="632" height="382" />
                </div>
                {box ? <BoxLink videoBox={box} text={box.text} type="video" /> : <PlayerBtn className="video__player" />}
                <a className="full-link" href={href ? href : '#'}
                    target="_blank" aria-label="Смотреть видео"></a>
            </div>
            {info &&
                <figcaption className={classNames('video__info', {
                    'video__info--white': infoColor === 'white'
                })}>
                    {info.items.map(item => (
                        <span key={item.text.toString()}>{item.text}</span>
                    ))}
                </figcaption>
            }
        </figure>
    );
}

export default Video;