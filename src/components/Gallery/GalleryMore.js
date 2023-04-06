import React, {useEffect} from 'react';
import Fancybox from "./Fancybox/Fancybox";
import {useDispatch, useSelector} from "react-redux";
import {getGallery, setPageSate} from "../../redux/reducers/app";

const GalleryMore = () => {
    const dispatch = useDispatch();
    const galleryList = useSelector(s => s.app.gallery).reverse();
    useEffect(()=>{
        dispatch(setPageSate());
        dispatch(getGallery());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section className={'gallery mt-50'}>
            <div className="container">
                <h2 className="title">Галерея</h2>

                <Fancybox options={{ infinite: false }}>

                    <div className="row">

                        {
                            galleryList.map(item =>{
                                return <div key={item.id}  data-fancybox="gallery"
                                            data-src={item.image} className="col-3">
                                    <img className={'gallery-img'} src={item.image} alt=""/>
                                </div>
                            })
                        }

                    </div>
                </Fancybox>
            </div>
        </section>
    );
};

export default GalleryMore;