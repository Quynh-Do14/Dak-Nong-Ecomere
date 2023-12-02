import React, { useEffect, useState } from 'react'
import BannerCommon from '../../infratructure/common/controls/banner'
import MainLayout from '../../infratructure/common/layout/main-layout'
import { ROUTE_PATH } from '../../core/common/appRouter'
import RelationArticle from '../../infratructure/common/controls/relation-article'
import Constants from '../../core/common/constant'
import { useLocation } from 'react-router-dom'
import api from '../../infratructure/api'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import { convertDateOnly, convertNumber, showImageCommon } from '../../infratructure/utils/helper'
import { ViewStarCommon } from '../../infratructure/common/controls/view-star'

const FestivalDetail = () => {
    const [loading, setLoading] = useState(false);
    const [detailFestival, setDetailFestival] = useState({});
    const [isOpenListImage, setIsOpenListImage] = useState(false);

    const location = useLocation();
    const search = location.search.replace("?", "");
    const onGetDetailDiemDenAsync = async () => {
        const response = await api.getDiaDiemById(
            `dichvu/top/${search}?idDanhMuc=${Constants.CategoryConfig.Festival.value}`,
            setLoading
        );
        setDetailFestival(response.diaDiem);
    };

    useEffect(() => {
        onGetDetailDiemDenAsync().then((_) => { });
    }, []);
    return (
        <MainLayout>
            <BannerCommon
                title={"Lễ hội"}
                redirect={ROUTE_PATH.FESTIVAL}
                redirectPage={"Lễ hội"}
                currentPage={"Chi tiết Lễ hội"}
            />
            <section className="destination-details-section pt-100">
                <div className="container">
                    <div className="destination-details-wrapper">
                        <div className="destination-info wow fadeInUp">
                            <h3 className="title">{detailFestival.tenDiaDiem} </h3>
                            <div className="meta">
                                <span className="location"><i className="fas fa-map-marker-alt"></i>{detailFestival.diaChi} </span>
                                <div>{ViewStarCommon(convertNumber(detailFestival.soSaoTrungBinh))}</div>
                            </div>
                            <div className="row mb-30">
                                <div className="col-lg-12">
                                    <img src={
                                        detailFestival.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(detailFestival.hinhAnh)
                                            :
                                            detailFestival.hinhAnh
                                    } alt="Image" className='object-cover' />
                                </div>
                            </div>
                            <h3>Tại sao nên chọn {detailFestival.tenDiaDiem}</h3>
                            <p>{detailFestival.moTa} </p>
                            <ul className="features-list mb-40">
                                <li><span>
                                    <i className="far fa-clock"></i>Thời gian: {convertDateOnly(detailFestival.gioMoCua)} - {convertDateOnly(detailFestival.gioDongCua)}
                                </span></li>
                                <li><span><i className="fas fa-usd-circle"></i>Giá vé: {detailFestival.giaVe === Constants.FreePrice || Constants.Undefined ? detailFestival.giaVe : `Chỉ từ: ${detailFestival.giaVe}`}</span></li>
                                <li><span><i class="fas fa-envelope"></i>Email liên hệ:{detailFestival.emailLienHe} </span></li>
                                <li><span><i class="fas fa-phone"></i>Số điện thoại: {detailFestival.sdtLienHe} </span></li>
                                <li><span><i className="fas fa-map-marker-alt"></i>{detailFestival.diaChi}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default FestivalDetail