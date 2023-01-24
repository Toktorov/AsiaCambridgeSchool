import React from 'react';
import img1 from '../../img/gallery/IMG_4834.JPG';
import Fancybox from "./Fancybox/Fancybox";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Gallery = () => {
    const galleryList = useSelector(s => s.app.gallery);
    const galleryLocal = galleryList.length > 3 ? [galleryList[0], galleryList[1], galleryList[2]] : [...galleryList];
    return (
        <section className={'gallery'}>
            <div className="container">
                <h2 className="title">Галерея</h2>

                <Fancybox options={{ infinite: false }}>

                    <div className="row">
                        {
                            galleryLocal.map(item =>{
                                return <div key={item.id}  data-fancybox="gallery"
                                              data-src={item.image} className="col-3">
                                    <img className={'gallery-img'} src={item.image} alt=""/>
                                </div>
                            })
                        }


                    </div>
                </Fancybox>
                <Link className={'link-more'} to={'/gallery'}>Еще...</Link>
            </div>
        </section>
    );
};

export default Gallery;