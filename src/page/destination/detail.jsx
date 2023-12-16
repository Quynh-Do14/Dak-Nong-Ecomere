import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/controls/banner'
import { ROUTE_PATH } from '../../core/common/appRouter'
import RelationDestination from '../../infratructure/common/controls/relation-destination'
import Constants from '../../core/common/constant'
import { convertNumber, showImageCommon } from '../../infratructure/utils/helper'
import api from '../../infratructure/api'
import { useLocation } from 'react-router-dom'
import { ViewStarCommon } from '../../infratructure/common/controls/view-star'
import LoadingFullPage from '../../infratructure/common/controls/loading'

const DestinationDetail = () => {
    const [loading, setLoading] = useState(false);
    const [detailDestination, setDetailDestination] = useState({});
    const [dsDiaDiemLienQuan, setDiaDiemLienQuan] = useState([]);
    const location = useLocation();

    const param = location.search.replace("?", "");

    const onGetDetailDiemDenAsync = async () => {
        const response = await api.getDiaDiemById(
            `dichvu/top/${param}?idDanhMuc=${Constants.CategoryConfig.Location.value}`,
            setLoading
        );
        setDetailDestination(response.diaDiem);
        const responses = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${response.diaDiem.idDanhMuc}&${Constants.Params.limit
            }=${3}&idQuanHuyen=${response.diaDiem.idQuanHuyen}`,
            setLoading
        );
        setDiaDiemLienQuan(responses.data.diaDiems);
    };

    useEffect(() => {
        onGetDetailDiemDenAsync().then((_) => { });
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
                            <h3 className="title">{detailDestination.tenDiaDiem} </h3>
                            <div className="meta">
                                <span className="location"><i className="fas fa-map-marker-alt"></i>{detailDestination.diaChi} </span>
                                <div>{ViewStarCommon(convertNumber(detailDestination.soSaoTrungBinh))}</div>
                            </div>
                            <div className="row mb-30">
                                <div className="col-lg-12">
                                    <img src={
                                        detailDestination.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(detailDestination.hinhAnh)
                                            :
                                            detailDestination.hinhAnh
                                    } alt="Image" className='object-cover' />
                                </div>
                            </div>
                            <h3>Tại sao nên chọn {detailDestination.tenDiaDiem}</h3>
                            <p>{detailDestination.moTa} </p>
                            <ul className="features-list mb-40">
                                <li><span>
                                    <i className="far fa-clock"></i>Thời gian mở cửa: {detailDestination.gioMoCua} - {detailDestination.gioDongCua}
                                </span></li>
                                <li><span><i className="fas fa-badge-check"></i>Địa điểm: {detailDestination.tenDanhMuc} </span></li>
                                <li><span><i className="fas fa-usd-circle"></i>Giá vé: {detailDestination.giaVe === Constants.FreePrice || Constants.Undefined ? detailDestination.giaVe : `Chỉ từ: ${detailDestination.giaVe}`}</span></li>
                                <li><span><i className="fas fa-envelope"></i>Email liên hệ:{detailDestination.emailLienHe} </span></li>
                                <li><span><i className="fas fa-phone"></i>Số điện thoại: {detailDestination.sdtLienHe} </span></li>
                                <li><span><i className="fas fa-map-marker-alt"></i>{detailDestination.diaChi}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <RelationDestination
                title={"Địa điểm liên quan"}
                data={dsDiaDiemLienQuan}
            />
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default DestinationDetail