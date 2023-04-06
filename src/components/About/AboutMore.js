import React, {useEffect} from 'react';
import img from "../../img/about/IMG_4801.JPG";
import {useDispatch, useSelector} from "react-redux";
import {getAbout, getHistory, getProgress, setPageSate} from "../../redux/reducers/app";
import {Link} from 'react-router-dom';

const AboutMore = () => {
    const dispatch = useDispatch();
    const aboutList = useSelector(s => s.app.about);
    const progressList = useSelector(s => s.app.progress);
    const historyText = useSelector(s => s.app.history);
    useEffect(()=>{
        dispatch(setPageSate());
        dispatch(getAbout());
        dispatch(getProgress());
        dispatch(getHistory());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section className={'about mt-50'}>
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

                <div className="about-history">
                    <h3 className="subtitle">История нашей школы</h3>
                    <p className="about-history-text">{historyText.history ? historyText.history.subject: ''}</p>
                </div>

                <div className="about-progress">


                        <div className="row">
                            <div className="col-6">
                                <h3 className="subtitle">Наши достижения</h3>
                            </div>
                            <div className="col-6">
                                <h3 className="subtitle">Мы не остановимся на достигнутом...</h3>
                            </div>

                            {
                                progressList.map(item =>{
                                    return <div key={item.id} className={'col-3'}>
                                        <div className="card">
                                            <Link style={{textDecoration: 'none'}} to={`/about/progress/${item.id}`} >
                                                <img  src={item.image} alt="" className="card-img"/>
                                                <p className="card-text"> {item.subject.length > 40 ? item.subject.slice(0, 40).trim() + '...' : item.subject}</p>
                                                <p>подробнее...</p>
                                            </Link>

                                        </div>
                                    </div>
                                })
                            }
                        </div>



                </div>
            </div>

        </section>
    );
};

export default AboutMore;