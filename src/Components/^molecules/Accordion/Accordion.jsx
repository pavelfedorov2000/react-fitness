import React from 'react';

function Accordion() {
    return (
        <div className="accordion">
            <button className="accordion-toggle" type="button" aria-expanded="false"></button>
            <div className="accordion-content"></div>
        </div>
    );
}

export default Accordion;