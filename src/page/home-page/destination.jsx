import React from 'react'
import Constants from '../../core/common/constant'
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../core/common/appRouter';
import { convertNumber, showImageCommon } from '../../infratructure/utils/helper';
import { ViewStarCommon } from '../../infratructure/common/controls/view-star';
const Destination = ({ data = [] }) => {
    const navigate = useNavigate();

    const onNavigate = (id) => {
        navigate(`${(ROUTE_PATH.VIEW_DESTINATION)}?${id}`)
    }
    return (
        <section className="service-section pt-100 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="section-title text-center mb-50">

                            <h2>Địa điểm nổi bật</h2>
                        </div>
                    </div>
                </div>
                <div className="slider-active-3-item wow fadeInUp row">
                    {data.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div key={index} className="single-service-item-three mb-40">
                                <div className="content">
                                    <h3 className="title text-truncate-title"><a>{it.tenDiaDiem} </a></h3>
                                    <div>
                                        {ViewStarCommon(convertNumber(it.soSaoTrungBinh))}
                                    </div>
                                    <p className='text-truncate-7-5'>{it.moTa} </p>
                                    <img src={
                                        it.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(it.hinhAnh)
                                            :
                                            it.hinhAnh
                                    } height={220} alt="Image" className='object-cover' />
                                    <a onClick={() => onNavigate(it.idDiaDiem)} className="btn-link">Xem thêm <i className="far fa-long-arrow-right"></i></a>
                                    {/* <div className="meta">`
                                    <span className="icon"><i className="flaticon-blanket"></i></span>
                                    <span className="icon"><i className="flaticon-cat"></i></span>
                                    <span className="icon"><i className="flaticon-tent"></i></span>
                                    <span className="icon"><i className="flaticon-fire"></i></span>
                                    <span className="rate"><i className="fas fa-star"></i>4.9</span>
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