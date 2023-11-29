import React from 'react'
import Constants from '../../core/common/constant'

const Festival = () => {
    return (
        <section className="service-section-two black-bg pt-100 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="section-title text-center text-white mb-45 wow fadeInDown">
                            <h2>Lễ hội </h2>
                        </div>
                    </div>
                </div>
                <div className="slider-active-3-item wow fadeInUp row">
                    {Constants.DataTemplate.list.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-service-item-four mb-40">
                                <div className="img-holder">
                                    <img src={it.img} alt="Service Image" />
                                </div>
                                <div className="content">
                                    <a href="#" className="icon-btn"><i className="fas fa-heart"></i></a>
                                    <h3 className="title">{it.name} </h3>
                                    <p>{it.description} </p>
                                    <div className="action-btn">
                                        <a href="tour-details.html" className="main-btn primary-btn">Xem thêm<i className="far fa-paper-plane"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Festival