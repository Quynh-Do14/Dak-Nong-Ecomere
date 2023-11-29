import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/controls/banner'
import { ROUTE_PATH } from '../../core/common/appRouter'
import RelationDestination from '../../infratructure/common/controls/relation-destination'
import Constants from '../../core/common/constant'

const DestinationDetail = () => {
    const [detalDestination, setDetalDestination] = useState({});
    useEffect(() => {
        setDetalDestination(Constants.DataTemplate.list[1])
    }, []);
    return (
        <MainLayout>
            <BannerCommon
                title={"Khám phá các địa điểm du lịch"}
                redirect={ROUTE_PATH.DESTINATION}
                redirectPage={"Địa điểm du lịch"}
                currentPage={"Chi tiết địa điểm"}
            />
            <section className="destination-details-section pt-100">
                <div className="container">
                    <div className="destination-details-wrapper">
                        <div className="destination-info wow fadeInUp">
                            <h3 className="title">{detalDestination.name} </h3>
                            <div className="meta">
                                <span className="location"><i className="fas fa-map-marker-alt"></i>{detalDestination.address} </span>
                                <ul className="ratings">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                            </div>
                            <p>{detalDestination.description} </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="assets/images/place/des-single-1.jpg" className="rounded mb-40" alt="Features Image" />
                                </div>
                                <div className="col-lg-6">
                                    <img src="assets/images/place/des-single-2.jpg" className="rounded mb-40" alt="Features Image" />
                                </div>
                            </div>
                            <h3>Why Choose Maldives</h3>
                            <p>{detalDestination.description} </p>
                            {/* <ul className="features-list mb-40">
                                <li><span><i className="fas fa-badge-check"></i>Family Camping</span></li>
                                <li><span><i className="fas fa-badge-check"></i>Wild Camping</span></li>
                                <li><span><i className="fas fa-badge-check"></i>Fishing</span></li>
                                <li><span><i className="fas fa-badge-check"></i>Mountain Biking</span></li>
                                <li><span><i className="fas fa-badge-check"></i>Free Wi-fi Internet</span></li>
                                <li><span><i className="fas fa-badge-check"></i>Transportation</span></li>
                                <li><span><i className="fas fa-badge-check"></i>Spa & GYM</span></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>
            <RelationDestination
                title={"Địa điểm liên quan"}
            />
        </MainLayout>
    )
}

export default DestinationDetail