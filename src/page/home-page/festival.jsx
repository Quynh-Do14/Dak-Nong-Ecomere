import React from 'react'
import Constants from '../../core/common/constant'
import { ROUTE_PATH } from '../../core/common/appRouter';
import { useNavigate } from 'react-router-dom';
import { showImageCommon } from '../../infratructure/utils/helper';

const Festival = ({ data = [] }) => {
    const navigate = useNavigate();

    const onNavigate = (id) => {
        navigate(`${(ROUTE_PATH.VIEW_FESTIVAL)}?${id}`)
    }
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
                    {data.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-service-item-four mb-40">
                                <div className="img-holder">
                                    <img src={
                                        it.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(it.hinhAnh)
                                            :
                                            it.hinhAnh
                                    } height={180} alt="Service Image" className='object-cover' />
                                </div>
                                <div className="content">
                                    <a className="icon-btn"><i className="fas fa-heart"></i></a>
                                    <h3 className="title text-truncate-title">{it.tenDiaDiem} </h3>
                                    <p className='text-truncate'>{it.moTa} </p>
                                    <div className="action-btn">
                                        <a onClick={() => onNavigate(it.idDiaDiem)} className="main-btn primary-btn  mt-10">Xem thêm<i className="far fa-paper-plane"></i></a>
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