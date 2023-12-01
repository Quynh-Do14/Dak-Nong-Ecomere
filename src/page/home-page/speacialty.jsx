import React from 'react'
import Constants from '../../core/common/constant'
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../core/common/appRouter';
import { showImageCommon } from '../../infratructure/utils/helper';

const Speacialty = ({ data = [] }) => {
    const navigate = useNavigate();

    const onNavigate = (id) => {
        navigate(`${(ROUTE_PATH.VIEW_SPECIALTY)}?${id}`)
    }
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
                    {data.map((it, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-post-three mb-40">
                                <div className="post-thumbnail">
                                    <img src={
                                        it.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(it.hinhAnh)
                                            :
                                            it.hinhAnh
                                    } height={200} alt="Image" className='object-cover' />
                                </div>
                                <div className="entry-content">
                                    <div className="post-meta">
                                        <h3 className="title text-truncate-title">{it.tenDiaDiem} </h3>
                                        <p className='text-truncate'>{it.moTa} </p>
                                        <a style={{ marginTop: "20px" }} onClick={() => onNavigate(it.idDiaDiem)} className="main-btn filled-btn">Xem thêm<i className="far fa-paper-plane"></i></a>
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