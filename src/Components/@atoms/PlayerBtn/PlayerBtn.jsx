import classNames from 'classnames';
import React from 'react';

function PlayerBtn({ className, round }) {
    return (
        <span class={classNames('player-btn', className, {
            'player-btn--round': round
        })}>
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0.5C5.1996 0.5 0.5 5.1996 0.5 11C0.5 16.8004 5.1996 21.5 11 21.5C16.8004 21.5 21.5 16.8004 21.5 11C21.5 5.1996 16.8004 0.5 11 0.5ZM15.8986 12.0161L8.44698 16.2923C7.77802 16.6649 6.93548 16.1865 6.93548 15.4032V6.59677C6.93548 5.81774 7.77379 5.33508 8.44698 5.70766L15.8986 10.2379C16.5929 10.6274 16.5929 11.6308 15.8986 12.0161Z" />
            </svg>
        </span>
    );
}

export default PlayerBtn;