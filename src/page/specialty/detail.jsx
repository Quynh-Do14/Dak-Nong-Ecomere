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

const SpecialtyDetail = () => {
    const [loading, setLoading] = useState(false);
    const [detailSpecialty, setDetailSpecialty] = useState({});
    const location = useLocation()
    const search = location.search.replace("?", "")
    const onGetDetailDacSanAsync = async () => {
        const response = await api.getDiaDiemById(
            `dichvu/top/${search}?idDanhMuc=${Constants.CategoryConfig.Specialty.value}`,
            setLoading
        )
        setDetailSpecialty(response.diaDiem);
    }

    useEffect(() => {
        onGetDetailDacSanAsync().then(_ => { });
    }, []);
    return (
        <MainLayout>
            <BannerCommon
                title={"Đặc sản"}
                redirect={ROUTE_PATH.SPECIALTY}
                redirectPage={"Đặc sản"}
                currentPage={"Chi tiết đặc sản"}
            />
            <section className="destination-details-section pt-100">
                <div className="container">
                    <div className="destination-details-wrapper">
                        <div className="destination-info wow fadeInUp">
                            <h3 className="title">{detailSpecialty.tenDiaDiem} </h3>
                            <div className="meta">
                                <span className="location"><i className="fas fa-map-marker-alt"></i>{detailSpecialty.diaChi} </span>
                                <div>{ViewStarCommon(convertNumber(detailSpecialty.soSaoTrungBinh))}</div>
                            </div>
                            <div className="row mb-30">
                                <div className="col-lg-12">
                                    <img src={
                                        detailSpecialty.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(detailSpecialty.hinhAnh)
                                            :
                                            detailSpecialty.hinhAnh
                                    } alt="Image" className='object-cover' />
                                </div>
                            </div>
                            <h3>Tại sao nên chọn {detailSpecialty.tenDiaDiem}</h3>
                            <p>{detailSpecialty.moTa} </p>
                            <ul className="features-list mb-40">
                                <li><span><i class="fas fa-envelope"></i>Email liên hệ:{detailSpecialty.emailLienHe} </span></li>
                                <li><span><i class="fas fa-phone"></i>Số điện thoại: {detailSpecialty.sdtLienHe} </span></li>
                                <li><span><i className="fas fa-map-marker-alt"></i>{detailSpecialty.diaChi}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default SpecialtyDetail