import {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {clearProgressDetail, getProgressDetail} from "../../redux/reducers/app";

const ProgressMore = () => {
    const progressDetail = useSelector(s => s.app.progressDetail);
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearProgressDetail());
        dispatch(getProgressDetail(params.id));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section>
<div className="container">
    <p style={{margin: '20px 0' }}>{progressDetail.subject}</p>
    <img src={progressDetail.image} alt="" style={{width: '100%'}}/>

</div>
        </section>
    );
};

export default ProgressMore;