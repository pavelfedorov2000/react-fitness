import React from 'react';

function Views({ count }) {
    return (
        <span className="views@@if(context.class){ @@class}@@if(context.color){ views--style_color-@@color}">
            <svg className="views__icon"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4981 9.99172C12.4981 11.3158 11.3778 12.3891 9.9958 12.3891C8.6138 12.3891 7.49347 11.3158 7.49347 9.99172C7.49347 8.66767 8.6138 7.59433 9.9958 7.59433C11.3778 7.59432 12.4981 8.66768 12.4981 9.99172ZM10.0003 5C8.56942 5.00635 7.08624 5.35469 5.68221 6.02163C4.63974 6.53721 3.6238 7.26463 2.74191 8.16247C2.30877 8.62079 1.75631 9.28443 1.66699 9.9925C1.67755 10.6058 2.33546 11.3629 2.74191 11.8225C3.5689 12.6851 4.55838 13.3922 5.68221 13.9639C6.99153 14.5993 8.44077 14.9652 10.0003 14.9855C11.4326 14.9791 12.9154 14.6267 14.3179 13.9639C15.3604 13.4483 16.3768 12.7204 17.2587 11.8225C17.6919 11.3642 18.2443 10.7006 18.3337 9.9925C18.3231 9.37915 17.6652 8.62207 17.2587 8.16244C16.4318 7.29986 15.4417 6.59329 14.3179 6.0216C13.0093 5.38665 11.5565 5.02332 10.0003 5ZM9.99927 6.23956C12.1676 6.23956 13.9253 7.92003 13.9253 9.99304C13.9253 12.066 12.1676 13.7465 9.99927 13.7465C7.83095 13.7465 6.07323 12.066 6.07323 9.99304C6.07323 7.92003 7.83095 6.23956 9.99927 6.23956Z" />
            </svg>
            <span className="views__value">{count}</span>
        </span>
    );
}

export default Views;