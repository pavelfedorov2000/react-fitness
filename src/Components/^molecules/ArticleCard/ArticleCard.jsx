import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBtn, Badge, DateTime, Img, Views } from '../../@atoms';

function ArticleCard({className, sale, datetime, img, category, kg, title, discount, views, bg, badgeBg }) {
    return (
        <article className={classNames('article-card', className, bg && `article-card--style_bg-${bg}`, {
            'sale': sale
        })}>
            <DateTime className="article-card__date" {...datetime} />
            <div className="article-card__body">
                <div className="article-card__img">
                    <Img src={img.src} width="344" height="440" />
                </div>

                <div className="article-card__content">
                    <Badge bg={badgeBg} {...category} />

                    {kg &&
                        <div className="article-card__kg">
                            <span>{kg}</span>
                            <span>кг</span>
                        </div>
                    }

                    <div className="article-card__title">
                        <Link to="/">
                            {discount ? 
                                <>
                                    <span>{title.text}</span>
                                    <span>{discount.text}</span>
                                </>
                                : title.text
                            }
                        </Link>
                    </div>

                    <Views className="article-card__views" {...views} />
                </div>

                <ArrowBtn bg="white" />
            </div>
        </article>
    );
}

export default ArticleCard;