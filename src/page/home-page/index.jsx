import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import Festival from './festival'
import Destination from './destination'
import Speacialty from './speacialty'
import Articles from './articles'
import Constants from '../../core/common/constant'
import SlideBanner from '../../infratructure/common/controls/slide-banner'

export const HomePage = () => {
    return (
        <div>
            <MainLayout>
                <SlideBanner />
                {/* //////////// */}
                <section className="features-section pt-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center mb-45 wow fadeInDown">
                                    <h2>Khám phá du lịch Đắk Nông </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Constants.DataTemplate.list.map((it, index) => (
                                <div key={index} className="col-xl-3 col-md-6 col-sm-12">
                                    <div className="single-features-item-two mb-40 wow fadeInUp">
                                        <div className="img-holder">
                                            <img src={it.img} alt="Features Image" width={300} height={350} />
                                            <div className="item-overlay">
                                                <div className="content">
                                                    <h3 className="title">{it.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* //////////// */}
                <Festival />
                {/* //////////// */}
                <section className="cta-bg overlay bg_cover pt-150 pb-150" style={{ backgroundImage: "url(assets/images/bg/cta-bg.jpg)" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="cta-content-box text-center text-white wow fadeInUp">
                                    <h2 className="mb-35">Sẵn sáng cho những trải nghiệm du lịch mới </h2>
                                    <a href="about.html" className="main-btn secondary-btn">Xem thêm <i className="far fa-paper-plane"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Articles />
                <Destination />
                <section className="about-section bg_cover pt-165 pb-210" style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="about-image-box mb-50">
                                    <img src="assets/images/about/about-2.jpg" className="rounded-2" alt="About Image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-box text-white pl-lg-40 mb-50">
                                    <div className="section-title mb-30">
                                        <h2>Những địa điểm du lịch mới lạ </h2>
                                    </div>
                                    <p className="mb-30">
                                        Nơi đây được thiên nhiên ưu đãi với nhiều cảnh quan thiên nhiên tươi đẹp, hùng vĩ cùng với nền văn hóa bản địa độc đáo
                                    </p>
                                    <img src="assets/images/about/avater.png" alt="Avater" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Speacialty />
            </MainLayout>
        </div >
    )
}
