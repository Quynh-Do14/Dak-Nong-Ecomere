import React from 'react'
import Constants from '../../core/common/constant'
import { ROUTE_PATH } from '../../core/common/appRouter';
import { useNavigate } from 'react-router-dom';
import { convertDateOnly, showImageCommon } from '../../infratructure/utils/helper';

const Articles = ({ data = [] }) => {
    const navigate = useNavigate();

    const onNavigate = (id) => {
        navigate(`${(ROUTE_PATH.VIEW_ARTICLE)}?${id}`)
    }

    return (
        <section className="activity-section-four pt-100 pb-100 bg-linear-green pb-60">
            <div className="row justify-content-center">
                <div className="col-xl-7">
                    <div className="section-title text-center text-white mb-45 wow fadeInDown">
                        <h2 className='color-black'>Bài viết hôm nay </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="slider-active-3-item wow fadeInUp row">
                    {data.map((it, index) => (
                        <div key={index} className="single-activity-item mb-40 col-lg-4 col-md-6 col-sm-12">
                            <div className="img-holder">
                                <img src={
                                    it.hinhAnh?.indexOf("http") == -1
                                        ?
                                        showImageCommon(it.hinhAnh)
                                        :
                                        it.hinhAnh
                                } height={250} alt="Image" className='object-cover' />
                            </div>
                            <div className="content pt-20">
                                {/* <div className="meta">
                                        <ul>
                                            <li><span className="icon"><i className="flaticon-blanket"></i></span></li>
                                            <li><span className="icon"><i className="flaticon-cat"></i></span></li>
                                            <li><span className="icon"><i className="flaticon-tent"></i></span></li>
                                            <li><span className="icon"><i className="flaticon-fire"></i></span></li>
                                        </ul>
                                        <div className="rate"><i className="fas fa-star"></i>4.9</div>
                                    </div> */}
                                <h3 className="title text-truncate-title ">{it.tieuDe} </h3>
                                <span className='mt-10 mb-10'><i className="far fa-calendar-alt mr-10"></i><a>{convertDateOnly(it.ngayDang)} </a></span>
                                <p className='text-truncate-7-5'>{it.tieuDeCon} </p>
                                <a onClick={() => onNavigate(it.idTinTuc)} className="main-btn filled-btn">Xem thêm<i className="fas fa-paper-plane"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles