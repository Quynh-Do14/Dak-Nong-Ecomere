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
        <section class="hero-section bg-white">
            <div class="hero-wrapper-four">
                <div class="shape"><span><img src="assets/images/hero/map.png" alt="" /></span></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7">
                            <div class="hero-content">
                                <span class="sub-title wow fadeInUp" data-wow-delay=".3s">Du lịch & Trải nghiệm</span>
                                <h1 class="wow fadeInDown" data-wow-delay=".5s">Chào mừng đến với Đắk Nông</h1>
                                <p class="wow fadeInUp" data-wow-delay=".6s">Tận hưởng mọi khoảnh khắc của chuyến đi của bạn.<br />
                                    Một chuyến đi không chỉ là sự di chuyển, đó là một hành trình trải nghiệm</p>
                                <div className="hero-button" data-animation="fadeInRight" data-delay=".6s">
                                    <a href={ROUTE_PATH.DESTINATION} className="main-btn primary-btn">Khám phá ngay<i className="fas fa-paper-plane"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 d-xl-block d-none">
                            <div class="hero-image wow fadeInRight" data-wow-delay=".8s">
                                <img src={slide} alt="hero image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SlideBanner