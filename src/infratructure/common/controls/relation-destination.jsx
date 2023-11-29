import React from 'react'
import Constants from '../../../core/common/constant'

const RelationDestination = (props) => {
    const { title } = props;
    return (
        <section className="places-seciton pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-45 wow fadeInDown">
                            <h2>{title} </h2>
                        </div>
                    </div>
                </div>
                <div className="slider-active-3-item-dot wow fadeInUp row">
                    {Constants.DataTemplate.list.map((it, index) => (
                        <div key={index} className="col-xl-4 col-md-6 col-sm-12 places-column">
                            <div className="single-place-item mb-60">
                                <div className="place-img">
                                    <img src={it.img} alt="Place Image" />
                                </div>
                                <div className="place-content">
                                    <div className="info">
                                        <ul className="ratings">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><a href="#">(4.9)</a></li>
                                        </ul>
                                        <h4 className="title"><a href="tour-details.html">{it.name} </a></h4>
                                        <p className="location"><i className="fas fa-map-marker-alt"></i>North Province, Maldives</p>
                                        <p className="price"><i className="fas fa-usd-circle"></i>Price<span className="currency">$</span>93.65</p>
                                        <div className="meta">
                                            <span><i className="far fa-clock"></i>05 Days</span>
                                            <span><i className="far fa-user"></i>25</span>
                                            <span><a href="tour-details.html">Details<i className="far fa-long-arrow-right"></i></a></span>
                                        </div>
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

export default RelationDestination