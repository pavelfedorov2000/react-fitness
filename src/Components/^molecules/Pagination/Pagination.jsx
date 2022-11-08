import classNames from 'classnames';
import React from 'react';

function Pagination({ className }) {
    return (
        <nav className={classNames('pagination', className)}
            aria-label="pagination">
            <ol className="pagination__list">
                <li className="pagination__item">
                    <button type="button"
                        className="pagination__link active">1</button>
                </li>
                <li className="pagination__item">
                    <button type="button"
                        className="pagination__link">2</button>
                </li>
                <li className="pagination__item">
                    <button type="button"
                        className="pagination__link">3</button>
                </li>
            </ol>
        </nav>
    );
}

export default Pagination;