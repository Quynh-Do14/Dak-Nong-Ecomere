import React from 'react';
import slide from "../../../asset/img/slide-banner.jpg";
import slide1 from "../../../asset/img/slide-banner2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../core/common/appRouter';
const dataImg = [
    { img: slide },
    { img: slide1 }
]
const SlideBanner = () => {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(ROUTE_PATH.DESTINATION)
    }


    return (
        <Carousel showStatus={false} showThumbs={false}>
            {dataImg.map((it, index) => (
                <div key={index} className="single-slider">
                    <img src={it.img} style={{ objectFit: "cover" }} alt="" className='img-banner' />
                    <div className="nav-overlay acitve"></div>
                    < div className="container-fluid positiion-slider" >
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-11 col-lg-10">
                                <div className="hero-content text-white text-center">
                                    <span className="ribbon">Du lịch & Trải nghiệm</span>
                                    <h1 className='pt-10 pb-10' data-animation="fadeInDown" data-delay=".4s">Tận hưởng mọi khoảnh khắc của chuyến đi của bạn</h1>
                                    <div className="hero-button" data-animation="fadeInRight" data-delay=".6s">
                                        <a href={ROUTE_PATH.DESTINATION} className="main-btn primary-btn">Khám phá ngay<i className="fas fa-paper-plane"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </Carousel >
    )
}

export default SlideBanner