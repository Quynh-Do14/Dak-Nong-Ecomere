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
                    {data.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div key={index} class="single-service-item-three mb-40">
                                <div class="content">
                                    <h3 class="title text-truncate-title "><a>{it.tenDiaDiem} </a></h3>
                                    <div>
                                        {ViewStarCommon(convertNumber(it.soSaoTrungBinh))}
                                    </div>
                                    <p className='text-truncate'>{it.moTa} </p>
                                    <img src={
                                        it.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(it.hinhAnh)
                                            :
                                            it.hinhAnh
                                    } height={220} alt="Image" className='object-cover' />
                                    <a onClick={() => onNavigate(it.idDiaDiem)} class="btn-link">Xem thêm <i class="far fa-long-arrow-right"></i></a>
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