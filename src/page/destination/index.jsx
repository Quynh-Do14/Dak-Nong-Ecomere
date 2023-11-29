import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/controls/banner'
import SearchDestination from './search'
import { ROUTE_PATH } from '../../core/common/appRouter'
import Constants from '../../core/common/constant'

const DestinationPage = () => {
    return (
        <MainLayout>
            <BannerCommon
                title={"Khám phá các địa điểm du lịch"}
                redirect={ROUTE_PATH.HOME_PAGE}
                redirectPage={"Trang chủ"}
                currentPage={"Địa điểm du lịch"}
            />
            <SearchDestination />
            <section className="places-section pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        {Constants.DataTemplate.list.map((it, index) => (
                            <div key={index} className="col-xl-4 col-md-6 col-sm-12 places-column">
                                <div className="single-place-item mb-60 wow fadeInUp">
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
                                            <p className="location"><i className="far fa-map-marker-alt"></i>{it.address} </p>
                                            <p className="price"><i className="fas fa-usd-circle"></i>Chỉ từ<span className="currency">$</span>93.65</p>
                                            <div className="meta">
                                                <span><i className="far fa-clock"></i>05 ngày</span>
                                                <span><i className="far fa-user"></i>25</span>
                                                <span><a href={ROUTE_PATH.VIEW_DESTINATION}>Xem chi tiết<i className="far fa-long-arrow-right"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="gowilds-pagination wow fadeInUp text-center">
                                <li><a href="#"><i className="far fa-arrow-left"></i></a></li>
                                <li><a href="#" className="active">01</a></li>
                                <li><a href="#">02</a></li>
                                <li><a href="#">03</a></li>
                                <li><a href="#">04</a></li>
                                <li><a href="#"><i className="far fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default DestinationPage