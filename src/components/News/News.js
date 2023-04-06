import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews, setPageSate} from "../../redux/reducers/app";

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(s => s.app.news).reverse();
const timeFormat = (str) =>{
    let endData = str.indexOf('T');
    let endTime = str.indexOf('.');
    let startTime = endData + 1;
    return `${str.slice(0, endData)} / ${str.slice(startTime, endTime)}`
};
    useEffect(()=>{
        dispatch(setPageSate());
        dispatch(getNews());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section className={'news'}>
            <div className="container">
                <h2 className={'title'}>Новости</h2>

                {
                    news.map(item =>{
                        return <div className={'news-item'} key={item.id}>
                            <h3 className="news-item-title">{item.title}</h3>
                            {
                                item.image ? <img className={'news-item-img'} src={item.image} alt="" /> : ''
                            }
                            <p className={'news-item-description'}>{item.description}</p>
                            <i className={'news-item-created'}>добавлено в: {timeFormat(item.created)}</i>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default News;