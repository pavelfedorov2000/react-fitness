import React from 'react';

function Messanger({ messanger }) {
    return (
        <a className="messanger" href="#">
            <messanger.name />
        </a>
    );
}

export default Messanger;