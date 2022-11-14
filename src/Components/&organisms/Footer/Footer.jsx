import React from 'react';
import { Link } from 'react-router-dom';
import { Contact, Logo } from '../../@atoms';
import footerLogo from '../../../assets/img/logo/footer-logo.svg';
import { Apps, Social } from '../../^molecules';

function Footer() {
    const [footerData, setFooterData] = React.useState([]);

    React.useEffect(() => {
        fetch('footer.json')
            .then(data => data.json())
            .then(data => setFooterData(data.footer));
    }, []);

    return (
        footerData && <footer className="footer">
            <div className="container footer__container">
                <div className="section-body footer__body">
                    <>
                        {footerData.menu && footerData.menu.cols.map((col, i) => (
                            <div key={`col-${i + 1}`} className={`footer__menu-col footer__menu-col--${i + 1}`}>
                                <div className="footer__title">{col.title.text}</div>
                                {col.list.items &&
                                    <ul className="footer__menu-list">
                                        {col.list.items.map(li => (
                                            <li key={li.text.toString()}>
                                                <Link className="footer__link" to={li.href}>{li.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        ))}
                    </>

                    {footerData.contacts &&
                        <address className="footer__contacts">
                            {footerData.contacts.items.map((item, index) => (
                                <Contact key={index} {...item} />
                            ))}
                        </address>
                    }

                    <Logo className="footer__logo" imgClassName="footer__logo-img" src={footerLogo} width="157" height="23" />

                    <Apps className="footer__apps" />

                    <Social className="footer__social" />

                    {footerData.copyright &&
                        <div className="footer__copyright">
                            {footerData.copyright.items.map((p, i) => <p key={i}>{p.text}</p>)}
                        </div>
                    }

                    {footerData.politics && <a className="footer__link footer__politics" href={footerData.politics.href}>{footerData.politics.text}</a>}

                    {footerData.developer &&
                        <dl className="footer__dev">
                            {footerData.developer.items.map((item, i) => (
                                <div key={i}>
                                    <dt>{item.key}</dt>
                                    <dd>
                                        <a href={item.value.href}>{item.value.text}</a>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;