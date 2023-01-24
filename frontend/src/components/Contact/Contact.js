import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import mapImg from '../../img/contact/map-img.png';
import {Link} from "react-router-dom";

const Contact = () => {

    return (
        <section className={'contact'}>
            <div className="container">
                <h2 className="title">Контакты/Адрес</h2>
                <div className="row">
                    <div className="col-6">
                        <h3 className="subtitle">Наши контакы</h3>
                        <ul className="contact-list list">
                            <li className="contact-list-item list-item"><a href="#"><FontAwesomeIcon icon={faPhone} /> tel</a></li>
                            <li className="contact-list-item list-item"><a target={"_blank"} href="#"><FontAwesomeIcon icon={faInstagram} />insta</a></li>
                            <li className="contact-list-item list-item"><a target={"_blank"} href="#"><FontAwesomeIcon icon={faFacebook} />facebook</a></li>
                            <li className="contact-list-item list-item"><a target={"_blank"} href="#"><FontAwesomeIcon icon={faWhatsapp} />WA</a></li>
                            <li className="contact-list-item list-item"><a href="#"><FontAwesomeIcon icon={faEnvelope} />email</a></li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <h3 className="subtitle">Наш адрес</h3>
                        <p className="contact-text">город Ош, улица Заднепровская 17</p>
                        <img className={"contact-img"} src={mapImg} alt=""/>
                        <a className={'contact-link'} target={"_blank"} href="https://goo.gl/maps/ctTLCHBcZEjRpqoBA">Открыть гугл карты</a>
                    </div>
                </div>
                <Link className={'link-more'} to={'/contact'}>Подробнее...</Link>
            </div>
            
        </section>
    );
};

export default Contact;