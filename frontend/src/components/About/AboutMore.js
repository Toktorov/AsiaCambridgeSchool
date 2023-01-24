import React, {useEffect} from 'react';
import img from "../../img/about/IMG_4801.JPG";
import {useDispatch, useSelector} from "react-redux";
import {setPageSate} from "../../redux/reducers/app";

const AboutMore = () => {
    const dispatch = useDispatch();
    const aboutList = useSelector(s => s.app.about);
    const progressList = useSelector(s => s.app.progress);
    const historyText = useSelector(s => s.app.history);
    useEffect(()=>{
        dispatch(setPageSate());
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
                            <ul className="list">
                                {
                                    progressList.map(item =>{
                                        return <li className="list-item" key={item.id}>{item.subject}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-6">
                            <h3 className="subtitle">Мы не остановимся на достигнутом...</h3>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default AboutMore;