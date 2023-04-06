import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setPageSate} from "../../redux/reducers/app";

const ForParents = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setPageSate())
    }, []);
    return (
        <section className={"forParents"}>
            <h1>Родителям</h1>
        </section>
    );
};

export default ForParents;