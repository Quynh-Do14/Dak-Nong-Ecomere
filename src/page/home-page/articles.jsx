import React from 'react'
import Constants from '../../core/common/constant'

const Articles = () => {
    return (
        <section className="activity-section-four pt-100 pb-100 black-bg pb-60">
            <div className="row justify-content-center">
                <div className="col-xl-7">
                    <div className="section-title text-center text-white mb-45 wow fadeInDown">
                        <h2>Bài viết hôm nay </h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="slider-active-3-item wow fadeInUp row">
                    {Constants.DataTemplate.list.map((it, index) => (
                        <div key={index} className="single-activity-item mb-40 col-xl-3 col-md-6 col-sm-12">
                            <div className="img-holder">
                                <img src={it.img} alt="Image" />
                            </div>
                            <div className="content">
                                {/* <div className="meta">
                                        <ul>
                                            <li><span className="icon"><i className="flaticon-blanket"></i></span></li>
                                            <li><span className="icon"><i className="flaticon-cat"></i></span></li>
                                            <li><span className="icon"><i className="flaticon-tent"></i></span></li>
                                            <li><span className="icon"><i className="flaticon-fire"></i></span></li>
                                        </ul>
                                        <div className="rate"><i className="fas fa-star"></i>4.9</div>
                                    </div> */}
                                <h3 className="title">{it.name} </h3>
                                <p>{it.description} </p>
                                <a href="#" className="main-btn filled-btn">Xem thêm<i className="fas fa-paper-plane"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles