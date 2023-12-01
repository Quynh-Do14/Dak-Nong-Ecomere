import React, { useEffect } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import Festival from './festival'
import Destination from './destination'
import Speacialty from './speacialty'
import Articles from './articles'
import Constants from '../../core/common/constant'
import SlideBanner from '../../infratructure/common/controls/slide-banner'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import { useState } from 'react'
import api from '../../infratructure/api'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../core/common/appRouter'
import homepage5 from '../../asset/img/home5.jpg'
import homepage6 from "../../asset/img/slide-banner.jpg";
import homepage7 from '../../asset/img/home7.jpg'
export const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [listTinTuc, setListTinTuc] = useState([]);
    const [listDiaDiem, setListDiaDiem] = useState([]);
    const [listDiaDiemTop2, setListDiaDiemTop2] = useState([]);
    const [listDiaDiemTop4TuTop2, setListDiaDiemTop4TuTop2] = useState([]);
    const [listDacSan, setListDacSan] = useState([]);
    const [listLeHoi, setListLeHoi] = useState([]);

    const navigate = useNavigate();

    const onGetListDiemDenAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit}=3`,
            setLoading
        );
        setListDiaDiem(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    };

    const onGetTop2DiaDiemDuLich = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit
            }=${2}`,
            setLoading
        );
        setListDiaDiemTop2(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    };
    const onGetTop4TuTop2DiaDiemDuLich = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit
            }=${4}&page=2`,
            setLoading
        );
        setListDiaDiemTop4TuTop2(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    };

    const onGetListDacSanAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}&${Constants.Params.limit}=3`,
            setLoading
        );
        setListDacSan(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    };

    const onGetListLeHoiAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Festival.value}&${Constants.Params.limit}=3`,
            setLoading
        );
        setListLeHoi(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    };

    const onGetListTinTucAsync = async () => {
        const response = await api.getAllTinTuc(`loaitin?type=1&limit=3`, setLoading);
        setListTinTuc(response.data.tinTucs);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    };
    useEffect(() => {
        onGetListDiemDenAsync().then((_) => { });
        onGetListTinTucAsync().then((_) => { });
        onGetListDacSanAsync().then((_) => { });
        onGetListLeHoiAsync().then((_) => { });
        onGetTop2DiaDiemDuLich().then((_) => { });
        onGetTop4TuTop2DiaDiemDuLich().then((_) => { });
    }, []);

    const onNavigate = (id) => {
        navigate(`${(ROUTE_PATH.VIEW_DESTINATION)}?${id}`)
    }

    return (
        <div>
            <MainLayout>
                <SlideBanner />
                {/* //////////// */}
                <section className="features-section pt-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center mb-45 wow fadeInDown">
                                    <h2>Khám phá du lịch Đắk Nông </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Constants.DataHomePage.list.map((it, index) => (
                                <div key={index} className="col-xl-3 col-md-6 col-sm-12">
                                    <div className="single-features-item-two mb-40 wow fadeInUp">
                                        <div className="img-holder">
                                            <img src={it.img} alt="Features Image" width={300} height={350} className='bject-cover' />
                                            <div className="item-overlay">
                                                <div className="content">
                                                    <h3 className="title white-space-nowrap">{it.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* //////////// */}
                <Articles data={listTinTuc} />
                {/* //////////// */}
                <section className="cta-bg overlay bg_cover pt-150 pb-150" style={{ backgroundImage: `url(${homepage5})` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="cta-content-box text-center text-white wow fadeInUp">
                                    <h2 className="mb-35">Sẵn sáng cho những trải nghiệm du lịch mới </h2>
                                    <a href={(ROUTE_PATH.SPECIALTY)} className="main-btn secondary-btn">Xem thêm <i className="far fa-paper-plane"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Destination data={listDiaDiem} />
                <Festival data={listLeHoi} />
                {/* //////////// */}
                <section className="about-section pt-100 pb-50">
                    <div className="container">
                        <div className="row align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="about-two_content-box mb-35 wow fadeInLeft">
                                    <div className="section-title mb-30">
                                        <span className="sub-title">Đa dạng du lịch </span>
                                        <h2>Đến với Đắk Nông để trải nghiệm tất cả các loại hình du lịch</h2>
                                    </div>
                                    <div className="card-list">
                                        <div className="card-item"><i className="fas fa-badge-check"></i>Nghỉ dưỡng</div>
                                        <div className="card-item"><i className="fas fa-badge-check"></i>Cắm trại</div>
                                        <div className="card-item"><i className="fas fa-badge-check"></i>Sinh thái</div>
                                        <div className="card-item"><i className="fas fa-badge-check"></i>Thiên nhiên</div>
                                        <div className="card-item"><i className="fas fa-badge-check"></i>Ẩm thực</div>
                                        <div className="card-item"><i className="fas fa-badge-check"></i>Lễ hội</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-one_image-box mb-50 wow fadeInRight">
                                    <img src={homepage7} className="radius-top-left-right-288 object-cover" alt="About image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //////////// */}
                <section className="about-section bg_cover pt-165 pb-210" style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}>
                    <div className="container">
                        <div className="row align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="about-image-box mb-50">
                                    <img src={homepage6} className="rounded-2" alt="About Image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-box text-white pl-lg-40 mb-50">
                                    <div className="section-title mb-30">
                                        <h2>Những địa điểm du lịch mới lạ </h2>
                                    </div>
                                    <p className="mb-30">
                                        Nơi đây được thiên nhiên ưu đãi với nhiều cảnh quan thiên nhiên tươi đẹp, hùng vĩ cùng với nền văn hóa bản địa độc đáo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Speacialty data={listDacSan} />
                <LoadingFullPage loading={loading} />
            </MainLayout>
        </div >
    )
}
