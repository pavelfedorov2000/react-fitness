import classNames from 'classnames';
import React from 'react';
import { Suptitle, Title } from '../../@atoms';

function SectionTop({className, title, suptitle}) {
    return (
        <div className={classNames('section-top', className)}>
            {suptitle && <Suptitle text={suptitle.text} />}
            {title && <Title level="2" text={title.text} sectionTitle />}
        </div>
    );
}

export default SectionTop;