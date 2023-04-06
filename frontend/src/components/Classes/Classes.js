import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setPageSate} from "../../redux/reducers/app";

const Classes = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setPageSate())
    }, []);
    return (
        <section className={"classes"}>
            <h1>Классы</h1>
        </section>
    );
};

export default Classes;