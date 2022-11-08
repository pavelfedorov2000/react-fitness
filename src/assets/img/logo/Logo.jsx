import React from 'react';

function logo() {
    return (
        <svg className="header__logo-img" viewBox="0 0 157 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M92 11.8001C91.5 11.4001 90.8 11.1001 90 10.8001L89.6 10.7001C89 10.5001 88.4 10.3001 87.8 10.2001L86.2 9.7001C85.8 9.6001 85.4 9.4001 85 9.1001C84.7 8.9001 84.5 8.7001 84.2 8.3001C84.1 8.3001 84 7.9001 84 7.4001V6.7001V6.1001C84.1 5.8001 84.3 5.6001 84.6 5.3001C84.9 5.0001 85.3 4.8001 85.8 4.7001C86.3 4.6001 86.8 4.5001 87.5 4.5001C88.5 4.5001 89.3 4.6001 90.1 4.8001C90.5573 4.93076 91.0573 5.1041 91.6 5.29224L91.6002 5.29231C91.8881 5.39213 92.1881 5.49612 92.5 5.6001L93.1 6.0001V2.8001L92.8 2.7001C92.2722 2.47389 91.6875 2.30454 91.0031 2.1063C90.7798 2.04163 90.546 1.97389 90.3 1.9001C89.5 1.7001 88.6 1.6001 87.4 1.6001C86.3 1.6001 85.5 1.7001 84.8 1.9001C83.9 2.2001 83.2 2.5001 82.6 3.0001C82 3.4001 81.5 4.0001 81.1 4.8001C80.7 5.5001 80.5 6.4001 80.5 7.5001C80.5 8.5001 80.7 9.4001 81.1 10.1001C81.6 10.8001 82.1 11.3001 82.6 11.6001C83.1 12.0001 83.8 12.3001 84.6 12.6001L85 12.7001C85.6 12.9001 86.2 13.1001 86.8 13.2001L88.4 13.7001C88.8 13.8001 89.2 14.0001 89.6 14.3001C89.9 14.5001 90.1 14.7001 90.3 15.0001C90.5 15.3001 90.6 15.8001 90.6 16.2001C90.6 16.8001 90.5 17.3001 90.3 17.7001C90.1 18.1001 89.8 18.4001 89.4 18.6001C89 18.9001 88.5 19.0001 88 19.1001C87.843 19.1175 87.683 19.138 87.52 19.1589C86.7482 19.2577 85.9082 19.3652 85 19.2001L83.7 19.0001C83.6 18.9501 83.5 18.9251 83.4 18.9001C83.3 18.8751 83.2 18.8501 83.1 18.8001C82.9685 18.7563 82.8562 18.7316 82.7546 18.7094C82.6246 18.6809 82.5123 18.6563 82.4 18.6001L80.6 17.9001V21.0001L80.9 21.1001C81 21.1001 81.2 21.2001 81.3 21.3001C81.3562 21.3563 81.4438 21.3809 81.5454 21.4094C81.6246 21.4316 81.7123 21.4563 81.8 21.5001C82 21.6001 82.3 21.7001 82.5 21.7001C82.6464 21.7001 82.7928 21.7537 82.9785 21.8216C83.0464 21.8465 83.1196 21.8733 83.2 21.9001L84.7 22.1001C85.3 22.2001 85.7 22.2001 86.3 22.2001C87.5 22.2001 88.5 22.1001 89.4 21.9001C90.3 21.7001 91.1 21.3001 91.9 20.8001C92.6 20.3001 93.2 19.7001 93.6 18.9001C94 18.1001 94.2 17.2001 94.2 16.1001C94.2 15.0001 94 14.1001 93.6 13.5001C93.1 12.7001 92.4 12.1001 92 11.8001ZM3.3 21.8001H0V1.90015H12.3V5.00015H3.3V10.2001H11.2V13.2001H3.3V21.8001ZM19.3 1.90015H16V21.8001H19.3V1.90015ZM22.7998 5.00015H29.0998V21.8001H31.8998V21.3001H32.2998V5.00015H38.6998V1.90015H22.7998V5.00015ZM67.0998 13.2001H75.1998V10.2001H67.0998V5.00015H76.2998V1.90015H63.7998V21.8001H76.6998V18.7001H67.0998V13.2001ZM55.2001 16.5001V12.5001V1.90015H58.5001V21.8001H55.4001L47.9001 11.0001C47.7001 10.7001 47.5001 10.4251 47.3001 10.1501C47.1001 9.87514 46.9001 9.60015 46.7001 9.30015C46.5001 9.00015 46.2751 8.67515 46.0501 8.35015L46.0498 8.34966L46.0497 8.34954C45.8248 8.02474 45.6 7.69996 45.4001 7.40015V11.7001V21.8001H42.1001V1.90015H45.2001L53.5001 13.9001C53.8552 14.5394 54.2608 15.1282 54.6811 15.7383C54.8525 15.9871 55.0263 16.2394 55.2001 16.5001ZM107.5 10.8001C108.3 11.1001 109 11.4001 109.5 11.8001C110.2 12.3001 110.7 12.9001 111 13.5001C111.4 14.1001 111.6 15.0001 111.6 16.1001C111.6 17.2001 111.4 18.1001 111 18.9001C110.7 19.4001 110.2 20.2001 109.3 20.8001C108.5 21.3001 107.7 21.7001 106.8 21.9001C105.9 22.1001 104.9 22.2001 103.7 22.2001C103.1 22.2001 102.7 22.2001 102.1 22.1001L100.6 21.9001C100.52 21.8733 100.446 21.8465 100.378 21.8216C100.193 21.7537 100.046 21.7001 99.8999 21.7001C99.6999 21.7001 99.3999 21.6001 99.1999 21.5001C99.1122 21.4563 99.0245 21.4316 98.9453 21.4094C98.8437 21.3809 98.7561 21.3563 98.6999 21.3001C98.5999 21.2001 98.3999 21.1001 98.2999 21.1001L97.9999 21.0001V18.0001L99.7999 18.7001C99.9122 18.7563 100.025 18.7809 100.155 18.8094C100.256 18.8316 100.368 18.8563 100.5 18.9001C100.6 18.9501 100.7 18.9751 100.8 19.0001C100.9 19.0251 101 19.0501 101.1 19.1001L102.4 19.3001C103.308 19.4652 104.148 19.3577 104.92 19.2589C105.083 19.238 105.243 19.2175 105.4 19.2001C105.9 19.1001 106.4 19.0001 106.8 18.7001C107.2 18.5001 107.5 18.2001 107.7 17.8001C107.9 17.4001 108 16.9001 108 16.3001C108 15.9001 107.9 15.4001 107.7 15.1001C107.5 14.8001 107.3 14.6001 107 14.4001C106.6 14.1001 106.2 13.9001 105.8 13.8001L104.2 13.3001C103.6 13.2001 103 13.0001 102.4 12.8001L102 12.7001C101.2 12.4001 100.5 12.1001 99.9999 11.7001C99.4999 11.4001 98.9999 10.9001 98.4999 10.2001C98.0999 9.5001 97.8999 8.6001 97.8999 7.6001C97.8999 6.5001 98.0999 5.6001 98.4999 4.9001C98.9999 4.1001 99.4999 3.5001 99.9999 3.0001C100.8 2.4001 101.5 2.0001 102.2 1.9001C102.9 1.7001 103.7 1.6001 104.8 1.6001C106 1.6001 106.9 1.7001 107.7 1.9001C107.946 1.97389 108.18 2.04163 108.403 2.1063C109.087 2.30454 109.672 2.47389 110.2 2.7001L110.5 2.8001V5.7001L109.8 5.4001C109.488 5.29609 109.188 5.19208 108.9 5.09224C108.357 4.9041 107.857 4.73076 107.4 4.6001C106.6 4.4001 105.8 4.3001 104.8 4.3001C104.1 4.3001 103.6 4.4001 103.1 4.5001C102.6 4.7001 102.2 4.9001 102 5.1001C101.7 5.4001 101.5 5.6001 101.4 5.9001V6.5001V7.2001C101.4 7.7001 101.6 8.1001 101.7 8.3001C101.804 8.40411 101.896 8.50811 101.984 8.60796C102.151 8.79609 102.304 8.96944 102.5 9.1001C102.9 9.4001 103.3 9.6001 103.7 9.7001L105.3 10.2001C105.9 10.3001 106.5 10.5001 107.1 10.7001L107.5 10.8001Z"
                fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
                d="M127.1 3.7V9.5H124L123.9 3.6C124.1 1.9 125.1 0.7 126.7 0.2L127.2 0L128 2.8L127.8 3C127.724 3.0382 127.662 3.07639 127.609 3.10902C127.524 3.1618 127.462 3.2 127.4 3.2L127.3 3.3C127.1 3.4 127.1 3.4 127.1 3.7ZM153.5 2.09998V13.1C153.5 14.5 153.5 15.9 153.6 17.3C153.45 17.1 153.3 16.875 153.15 16.65C153 16.425 152.85 16.2 152.7 16L150.9 13.3L143 2.09998H139.8V22.9H143.2V12.3V12.2995C143.2 10.5997 143.2 9.09984 143.1 7.69998L145.8 11.6L153.7 22.9H156.9V2.09998H153.5ZM132.3 3.19995L131.9 2.89995L130.1 5.39995L130.5 5.69995C132.6 7.29995 133.8 9.59995 133.8 12.2C133.8 16.6 130.2 20.2 125.8 20.2C121.4 20.2 117.8 16.6 117.8 12.2C117.8 9.59995 119.1 7.09995 121.3 5.59995L121.7 5.29995L120 2.69995L119.5 2.99995C116.5 4.99995 114.7 8.39995 114.7 12.1C114.7 18.2 119.7 23.1 125.7 23.1C131.7 23.1 136.7 18.2 136.7 12.1C136.8 8.59995 135.1 5.29995 132.3 3.19995Z"
                fill="#FFCC48" />
        </svg>
    );
}

export default logo;