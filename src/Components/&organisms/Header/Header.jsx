import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BurgerBtn, Count, Logo } from '../../@atoms';

function Header({ dark, modificator }) {
    const [headerData, setHeaderData] = React.useState([]);

    React.useEffect(() => {
        fetch('header.json')
            .then(data => data.json())
            .then(data => setHeaderData(data.header));
    }, []);

    return (
        headerData.length !== 0 && <div className={classNames('header', modificator !== undefined && `header--${modificator}`, {
            'header--dark': dark
        })}>
            <div className="header__inner">
                <Logo className="header__logo" text={headerData.logo.text} />

                <div className="header__menu menu-header">
                    <ul className="menu-header__links">
                        {headerData.menu.links.map(link => (
                            <li key={link.href.toString()} className="menu-header__links-item">
                                <Link className="menu-header__links-link" to={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>

                    <nav className="menu-header__nav">
                        <ul className="menu-header__nav-list">
                            {headerData.menu.nav.items.map(link => (
                                <li key={link.href.toString()} className="menu-header__nav-item">
                                    <Link className="menu-header__nav-link" to={link.href}>{link.text}</Link>
                                    {link.count && <Count value={link.count.value} />}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <BurgerBtn />
            </div>
        </div>
    );
}

export default Header;