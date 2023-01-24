import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPageSate} from "../../redux/reducers/app";

const TeachersMore = () => {
    const teachers = useSelector(s => s.app.teachers);
    const cooks = useSelector(s => s.app.cooks);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setPageSate())
    }, []);
    return (
        <section className={'teachers mt-50'}>
            <div className="container">
                <h2 className="title">Наши учителя</h2>
                <div className="row">
                    {
                        teachers.map(item =>{
                            return <div key={item.id} className="col-3">
                                <div className="teachers-card">
                                    <img src={item.image} alt="" className="teachers-card-img"/>
                                    <h4 className="teachers-card-name">{item.full_name}</h4>
                                    <p className="teachers-card-text">Учитель: {item.subject}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

                <h2 className="title mt-50">Наши повара</h2>
                <div className="row">
                    {
                        cooks.map(item =>{
                            return <div key={item.id} className="col-3">
                                <div className="teachers-card">
                                    <img src={item.image} alt="" className="teachers-card-img"/>
                                    <h4 className="teachers-card-name">{item.full_name}</h4>
                                    <p className="teachers-card-text">{item.subject}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </section>
    );
};

export default TeachersMore;