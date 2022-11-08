import React from 'react';

function List({items, count}) {
    const list = items.map(li => <li>{li}</li>);

    return (
        count === true ?
            <ol className="list">{list}</ol>
            :
            <ul className="list">{list}</ul>
    );
}

export default List; 