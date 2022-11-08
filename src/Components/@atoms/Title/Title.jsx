import classNames from 'classnames';
import React from 'react';

function Title({ level, text, sectionTitle, className, border, stroke }) {
    const textArr = text.split(' ');
    const spanOpen = textArr.filter(el => el.includes('<span>'));
    const spanOpenIndex = textArr.indexOf(spanOpen[0]);
    const spanClose = textArr.filter(el => el.includes('</span>'));
    const spanCloseIndex = textArr.indexOf(spanClose[0]);
    const spanArr = [...spanOpen, ...spanClose];
    const span = spanArr.map((el, i) => {
        if (i === 0) {
            return el.split('<span>').filter(el => !el.includes('<span>')).join('');
        } else if (i === spanArr.length - 1) {
            return el.split('</span>').filter(el => !el.includes('</span>')).join('');
        } else {
            return el;
        }
    }).join(' ');

    const formattedText = textArr.map((el, i) => {
        if (i === spanOpenIndex) {
            return <span key={i}>{span}</span>
        }

        if (i > spanOpenIndex && i <= spanCloseIndex) {
            return '';
        }

        return ` ${el} `;
    });

    function generateTitle(level, text, sectionTitle, className, border, stroke) {
        switch (level) {
            case '1':
                return <h1 className={classNames('title', className && className, {
                    'section-title': sectionTitle,
                    'section-title--border': sectionTitle && border,
                    'section-title--stroke': sectionTitle && stroke
                })}>{formattedText}</h1>
            case '2':
                return <h2 className={classNames('title', className && className, {
                    'section-title': sectionTitle,
                    'section-title--border': sectionTitle && border,
                    'section-title--stroke': sectionTitle && stroke
                })}>{formattedText}</h2>
            case '3':
                return <h3 className={classNames('title', className && className, {
                    'section-title': sectionTitle,
                    'section-title--border': sectionTitle && border,
                    'section-title--stroke': sectionTitle && stroke
                })}>{formattedText}</h3>
            case '4':
                return <h4 className={classNames('title', className && className, {
                    'section-title': sectionTitle,
                    'section-title--border': sectionTitle && border,
                    'section-title--stroke': sectionTitle && stroke
                })}>{formattedText}</h4>
        }
    }

    return (
        generateTitle(level, text, sectionTitle, className)
    );
}

export default Title;