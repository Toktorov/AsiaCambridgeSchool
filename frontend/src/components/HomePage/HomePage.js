import React, {useEffect} from 'react';
import Banner from "../Banner/Banner";
import About from "../About/About";
import Teachers from "../Teachers/Teachers";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import {useDispatch} from "react-redux";
import {setPageSate} from "../../redux/reducers/app";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setPageSate())
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