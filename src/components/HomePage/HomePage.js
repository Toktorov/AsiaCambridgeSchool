import React, {useEffect} from 'react';
import Banner from "../Banner/Banner";
import About from "../About/About";
import Teachers from "../Teachers/Teachers";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import {useDispatch} from "react-redux";
import {getAllData, setPageSate} from "../../redux/reducers/app";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setPageSate());
        getAllData(dispatch);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <main>
            <Banner/>
            <About/>
            <Teachers/>
            <Gallery/>
            <Contact/>
        </main>
    );
};

export default HomePage;