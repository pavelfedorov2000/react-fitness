import classNames from 'classnames';
import React from 'react';

function List({items, count, gap}) {
    const list = items.map(li => <li key={li.text.toString()}>{li.text}</li>);

    return (
        count === true ?
            <ol className={classNames('list counter', gap && `list--gap_${gap}`)}>{list}</ol>
            :
            <ul className={classNames('list', gap && `list--gap_${gap}`)}>{list}</ul>
    );
}

export default List; 