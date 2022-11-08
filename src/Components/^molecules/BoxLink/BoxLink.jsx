import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBtn, PlayerBtn } from '../../@atoms';

function BoxLink({className, text, to, videoBox, type }) { 
    return (
        to !== undefined ?
            <Link to={to} className={classNames('box-link', className && `${className}__box-link`, type && `box-link--type_${type}`)}>
                <span className="box-link__text">{text}</span>
                <ArrowBtn />
            </Link>
            : videoBox !== undefined ?
                <div className={classNames('box-link', className && `${className}__box-link`, type && `box-link--type_${type}`)}>
                    <span className="box-link__text">{text}</span>
                    <PlayerBtn className="box-link__player" />
                </div>
                :
            <button className={classNames('box-link', className && `${className}__box-link`, type && `box-link--type_${type}`)} type="button">
                <span className="box-link__text">{text}</span>
                <ArrowBtn bg="white" />
            </button>
    );
}

export default BoxLink;