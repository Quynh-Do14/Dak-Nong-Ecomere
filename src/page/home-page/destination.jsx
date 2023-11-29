import React from 'react'
import Constants from '../../core/common/constant'
const Destination = () => {
    return (
        <section class="service-section pt-100 pb-60">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7">
                        <div class="section-title text-center mb-50">

                            <h2>Địa điểm nổi bật</h2>
                        </div>
                    </div>
                </div>
                <div className="slider-active-3-item wow fadeInUp row">
                    {Constants.DataTemplate.list.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div key={index} class="single-service-item-three mb-40">
                                <div class="content">
                                    <h3 class="title"><a href="#">{it.name} </a></h3>
                                    <p>{it.description} </p>
                                    <img src={it.img} alt="service image" />
                                    <a href="#" class="btn-link">Xem thêm <i class="far fa-long-arrow-right"></i></a>
                                    {/* <div class="meta">`
                                    <span class="icon"><i class="flaticon-blanket"></i></span>
                                    <span class="icon"><i class="flaticon-cat"></i></span>
                                    <span class="icon"><i class="flaticon-tent"></i></span>
                                    <span class="icon"><i class="flaticon-fire"></i></span>
                                    <span class="rate"><i class="fas fa-star"></i>4.9</span>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Destination