import React from 'react';

function Messanger({ messanger }) {
    return (
        <a className="messanger" href="#">
            <messanger.svg />
        </a>
    );
}

export default Messanger;