import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAccreditation, setPageSate} from "../../redux/reducers/app";

const Accreditation = () => {
    const dispatch = useDispatch();
    const accreditation = useSelector(s => s.app.accreditation);
    useEffect(() => {
        dispatch(setPageSate());
        dispatch(getAccreditation());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section>
            <div className="container">
                <h2 className="title">Аккредитация</h2>
                <ul>
                    {
                        accreditation.map(item => {
                            return <li key={item.id}>
                                <a className={'link-more'} href={item.pdf_file} target={'blank'}>{item.title}</a>
                            </li>
                        })
                    }
                </ul>
            </div>



        </section>
    );
};

export default Accreditation;