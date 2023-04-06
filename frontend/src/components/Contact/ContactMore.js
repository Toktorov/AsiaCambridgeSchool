import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import mapImg from "../../img/contact/map-img.png";
import {useDispatch} from "react-redux";
import {setPageSate} from "../../redux/reducers/app";

const ContactMore = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setPageSate());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section className={'contact mt-50'}>
            <div className="container">
                <h2 className="title">Контакты/Адрес</h2>
                <div className="row">
                    <div className="col-6">
                        <h3 className="subtitle">Наши контакы</h3>
                        <ul className="contact-list list">
                            <li className="contact-list-item list-item"><a href="tel:+996557484839"><FontAwesomeIcon icon={faPhone} /> +996557484839</a></li>
                            <li className="contact-list-item list-item"><a href="tel:+996773077222"><FontAwesomeIcon icon={faPhone} /> +996773077222</a></li>
                            <li className="contact-list-item list-item"><a target={"_blank"} href="https://www.instagram.com/asia_cambridge/"><FontAwesomeIcon icon={faInstagram} />asia_cambridge</a></li>
                            {/*<li className="contact-list-item list-item"><a target={"_blank"} href="#"><FontAwesomeIcon icon={faFacebook} />facebook</a></li>*/}
                            <li className="contact-list-item list-item"><a target={"_blank"} href="https://wa.me/+996557484839"><FontAwesomeIcon icon={faWhatsapp} />+996557484839</a></li>
                            <li className="contact-list-item list-item"><a href="mailto:asia.cambridge.osh@mail.ru"><FontAwesomeIcon icon={faEnvelope} />asia.cambridge.osh@mail.ru</a></li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <h3 className="subtitle">Наш адрес</h3>
                        <p className="contact-text">город Ош, улица Заднепровская 17</p>
                        <img className={"contact-img"} src={mapImg} alt=""/>
                        <a className={'contact-link'} target={"_blank"} href="https://goo.gl/maps/ctTLCHBcZEjRpqoBA">Открыть гугл карты</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactMore;