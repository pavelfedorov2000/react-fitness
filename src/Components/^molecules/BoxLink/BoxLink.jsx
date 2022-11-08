import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../@atoms';

function BoxLink({ text, to, className }) {
    return (
        to !== undefined ?
            <Link to={to} className={classNames('box-link', className && `${className}__box-link`)}>
                <span className="box-link__text">{text}</span>
                <ArrowBtn />
            </Link>
            :
            <button className={classNames('box-link', className && `${className}__box-link`)} type="button">
                <span className="box-link__text">{text}</span>
                <ArrowBtn bg="white" />
            </button>
    );
}

export default BoxLink;