import classNames from 'classnames';
import React from 'react';

function ArrowBtn({ className, bg }) {
    return (
        <span className={classNames('arrow-btn', className, bg && `arrow-btn--style_bg-${bg}`)}>
            <svg className="arrow-btn__svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5287 9.51496L6.07211 15.9715L8.02852 17.9279L14.4832 11.4732L14.468 16.9919L16.9142 16.9852L16.9416 7.07594L16.942 7.04244L16.9417 7.04244L16.9417 7.0421L14.4954 7.04886L14.4954 7.05704L6.99868 7.10177L6.9684 9.54814L12.5287 9.51496Z" />
            </svg>
        </span>
    );
}

export default ArrowBtn;