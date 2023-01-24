import React from 'react';
import img from '../../img/about/IMG_4801.JPG';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const About = () => {
    const aboutList = useSelector(s => s.app.about);
    return (
        <section className={'about'}>
            <div className="container">
                <h2 className={'title'}>О нашей школе</h2>
                <div className="row">
                    <div className="col-6">
                        <h3 className="subtitle">Азия Кембридж - успешное будущее ваших детей!</h3>
                        <ul className="list">
                            {
                                aboutList.map(item =>{
                                    return <li className="list-item" key={item.id}>{item.subject}</li>
                                })
                            }

                        </ul>
                    </div>

                    <div className="col-6">
                        <img src={img} alt="" className="about-img"/>
                    </div>
                </div>
                <Link className={'link-more'} to={'/about'}>Подробнее...</Link>
            </div>

        </section>
    );
};

export default About;