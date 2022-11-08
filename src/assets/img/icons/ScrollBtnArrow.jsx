import React from 'react';

function ScrollBtnArrow({ className }) {
    return (
        <svg className={className ? className : null}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7306 14.9998L19 9.73048L17.2916 8L12.0057 13.2859L6.72499 8.03897L5 9.75293L11.9889 16.6972L12.011 16.7195L12.0112 16.7193L12.0114 16.7195L13.7364 15.0055L13.7306 149998Z" />
        </svg>
    );
}

export default ScrollBtnArrow;