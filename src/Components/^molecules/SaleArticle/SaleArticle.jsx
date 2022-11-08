import React from 'react';
import { Button, Img, Title } from '../../@atoms';

function SaleArticle({ article }) {
    const { title, text, btn } = article.content;

    return (
        <article className="splide__slide sale-slider__item">
            <div className="sale-slider__img">
                <Img src={article.img.src} />
            </div>
            <div className="sale-slider__content">
                {title && <Title className="sale-article__title" level="2" sectionTitle={true} text={title.text} />}
                {text &&
                    <p className="sale-slider__text">
                        {text}
                    </p>
                }
                {btn && <Button className="sale-article__btn" {...btn} />}
            </div>
        </article>
    );
}

export default SaleArticle;