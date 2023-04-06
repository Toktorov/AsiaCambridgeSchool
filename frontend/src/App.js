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
import News from "./components/News/News";
import ForParents from "./components/ForParents/ForParents";
import Classes from "./components/Classes/Classes";
import Accreditation from "./components/Accreditation/Accreditation";
import ProgressMore from "./components/About/ProgressMore";


function App() {
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
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/forParents"} element={<ForParents/>}/>
                    <Route path={"/classes"} element={<Classes/>}/>
                    <Route path={"/accreditation"} element={<Accreditation/>}/>
                    <Route path={"/about/progress/:id"} element={<ProgressMore/>}/>
                </Routes>
                <Footer/>

            </BrowserRouter>


        </div>
    );
}

export default App;
