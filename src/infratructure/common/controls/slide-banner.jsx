import React from 'react'

const SlideBanner = () => {
    return (
        <section className="hero-section">
            <div className="hero-wrapper black-bg">
                <div className="hero-slider-one">
                    <div className="single-slider">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="hero-content text-white">
                                        <h1 data-animation="fadeInDown" data-delay=".4s">Du lịch &
                                            trải nghiệm </h1>
                                        <div className="text-button d-flex align-items-center">
                                            <p data-animation="fadeInLeft" data-delay=".5s">
                                                Đắk Nông có vẻ đẹp tự nhiên phong phú, hài hòa với những dòng thác xen lẫn núi đồi, thung lũng và rừng nguyên sinh.
                                            </p>
                                            <div className="hero-button" data-animation="fadeInRight" data-delay=".6s">
                                                <a href="about.html" className="main-btn primary-btn">Xem thêm<i className="fas fa-paper-plane"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="hero-image" data-animation="fadeInRight">
                                        <img src="assets/images/hero/hero-one_img-1.jpg" alt="Hero Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SlideBanner