import {BrowserRouter, Routes, Route} from "react-router-dom";
import './style/fonts/stylesheet.css';
import './style/style.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AboutMore from "./components/About/AboutMore";
import TeachersMore from "./components/Teachers/TeachersMore";
import GalleryMore from "./components/Gallery/GalleryMore";
import ContactMore from "./components/Contact/ContactMore";
import Footer from "./components/Footer/Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllData} from "./redux/reducers/app";


function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        getAllData(dispatch);
    }, []);
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/about"} element={<AboutMore/>}/>
                    <Route path={"/teachers"} element={<TeachersMore/>}/>
                    <Route path={"/gallery"} element={<GalleryMore/>}/>
                    <Route path={"/contact"} element={<ContactMore/>}/>
                </Routes>
                <Footer/>

            </BrowserRouter>


        </div>
    );
}

export default App;
