import React from 'react';
import SlideToggle from "react-slide-toggle";

function FaqItem({ toggle, content }) {
    const [isToggle, setIsToggle] = React.useState(false);
    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <SlideToggle collapsed={isToggle} render={({ setCollapsibleElement }) => (
            <li className="faq-item">
                <button onClick={handleToggle} className="faq-item__toggle" type="button" aria-expanded={isToggle ? true : false}>
                    { toggle.text }
                </button>
                {isToggle && <div ref={setCollapsibleElement} className="faq-item__content">
                    {content.text}
                </div>}
            </li>
        )} />
    );
}

export default FaqItem;