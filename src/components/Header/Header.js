import {Link} from "react-router-dom";
import logo from "../../img/app/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Header = () => {
    const pageState = useSelector(s => s.app.pageState);
    const [showBurger, setShowBurger] = useState(false);
    const burgerFunc = () =>{
      setShowBurger(!showBurger);
    };

    return (
        <header>
            <div className="header">
                 <div className="container header-container">
                     <h1 className="header-logo"><Link  to={'/'}><img src={logo} alt=""/></Link></h1>

                     <nav className="header-nav">
                         <ul className={showBurger ? "header-menu header-menu-show" : "header-menu"}>
                             <li className="header-menu-li">
                                 <Link
                                     onClick={burgerFunc}
                                     className={pageState === 'home' ? 'header-active': ''}
                                       to={'/'}>Главная</Link>
                             </li>
                             <li className="header-menu-li">
                                 <Link
                                     onClick={burgerFunc}
                                     className={pageState === 'about' ? 'header-active': ''}
                                       to={'/about'}>О школе</Link>
                             </li>
                             <li className="header-menu-li">
                                 <Link
                                     onClick={burgerFunc}
                                     className={pageState === 'teachers' ? 'header-active': ''}
                                       to={'/teachers'}>Наши учителя</Link>
                             </li>
                             <li className="header-menu-li">
                                 <Link
                                     onClick={burgerFunc}
                                     className={pageState === 'gallery' ? 'header-active': ''}
                                     to={'/gallery'}>Галерея</Link>
                             </li>
                             <li className="header-menu-li">
                                 <Link
                                     onClick={burgerFunc}
                                     className={pageState === 'contact' ? 'header-active': ''}
                                     to={'/contact'}>Контакты</Link>
                             </li>
                             <li className="header-menu-li">
                                 <Link
                                 onClick={burgerFunc}
                                 className={pageState === 'news' ? 'header-active' : ''}
                                 to={'/news'}
                                 >Новости</Link>
                             </li>

                             {/*<li className="header-menu-li">*/}
                             {/*    <Link*/}
                             {/*        onClick={burgerFunc}*/}
                             {/*        className={pageState === 'classes' ? 'header-active' : ''}*/}
                             {/*        to={'/classes'}*/}
                             {/*    >Классы</Link>*/}
                             {/*</li>*/}

                             <li className="header-menu-li">
                                 <Link
                                     onClick={burgerFunc}
                                     className={pageState === 'accreditation' ? 'header-active' : ''}
                                     to={'/accreditation'}
                                 >Аккредитация</Link>
                             </li>
                         </ul>

                         <div onClick={burgerFunc} className="header-menu-btn">
                             <span> </span>
                         </div>
                     </nav>
                 </div>
            </div>
        </header>
    );
};

export default Header;