import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Teachers = () => {
    const teachers = useSelector(s => s.app.teachers);
    const teachersLocal = teachers.length > 4 ? [teachers[0], teachers[1], teachers[2], teachers[3]]: teachers;

    return (
        <section className={'teachers'}>
            <div className="container">
                <h2 className="title">Наши учителя</h2>
                <div className="row">
                    {
                        teachersLocal.map(item =>{
                            return <div key={item.id} className="col-3">
                                <div className="card">
                                    <img src={item.image} alt="" className="card-img"/>
                                    <h4 className="card-name">{item.full_name}</h4>
                                    <p className="card-text">Учитель: {item.subject}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <Link className={'link-more'} to={'/teachers'}>Подробнее...</Link>
            </div>
        </section>
    );
};

export default Teachers;