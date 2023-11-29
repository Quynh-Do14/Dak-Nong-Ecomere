import React from 'react'
import Constants from '../../core/common/constant'

const Speacialty = () => {
    return (
        <section className="blog-section pt-100 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center mb-45">
                            <h2>Đặc sản </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {Constants.DataTemplate.list.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-post-three mb-40">
                                <div className="post-thumbnail">
                                    <img src={it.img} alt="Blog Image" />
                                </div>
                                <div className="entry-content">
                                    <div className="post-meta">
                                        <span><i className="far fa-calendar-alt"></i><a href="#">{it.date} </a></span>
                                        <h3 className="title"><a href="blog-details.html">{it.name} </a></h3>
                                        <a href="blog-details.html" className="main-btn filled-btn">Xem thêm<i className="far fa-paper-plane"></i></a>
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

export default Speacialty;