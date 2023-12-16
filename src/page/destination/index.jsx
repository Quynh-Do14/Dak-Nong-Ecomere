import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/controls/banner'
import SearchDestination from './search'
import { ROUTE_PATH } from '../../core/common/appRouter'
import Constants from '../../core/common/constant'
import PaginationCommon from '../../infratructure/common/controls/pagination'
import api from '../../infratructure/api'
import { convertNumber, showImageCommon } from '../../infratructure/utils/helper'
import { ViewStarCommon } from '../../infratructure/common/controls/view-star'
import LoadingFullPage from '../../infratructure/common/controls/loading'
let timeout
const DestinationPage = () => {
    const [listDiaDiem, setListDiaDiem] = useState([]);

    const [dsQuanHuyen, setDsQuanHuyen] = useState([]);
    const [dsDanhMucDiaDiem, setDsDanhMucDiaDiem] = useState([]);

    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();

    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [changePage, setChangePage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchQuanHuyen, setSearchQuanHuyen] = useState("");
    const [searchDanhMuc, setSearchDanhMuc] = useState(Constants.CategoryConfig.Location.value);

    const onGetListDiemDenAsync = async ({ searchText = "", limit = pageSize, page = changePage, danhMuc = "", quanhuyen = "" }) => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?${Constants.Params.limit}=${limit}&${Constants.Params.page}=${page}&idQuanHuyen=${quanhuyen}&search=${searchText}&idDanhMuc=${danhMuc}`,
            setLoading
        )
        setListDiaDiem(response.data.diaDiems);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }

    const onGetQuanHuyenAsync = async () => {
        const response = await api.getAllQuanHuyen(
            ``,
            setLoading
        );
        const resGetDanhMucConCuaDanhMuc = await api.getDanhMucConCuaDanhMuc(
            `idDanhMuc=${1}`,
            setLoading
        );
        setDsQuanHuyen(response.data.quanHuyens);
        setDsDanhMucDiaDiem(resGetDanhMucConCuaDanhMuc.result);
    };

    const onSearch = async (searchText = "", limit = pageSize, page = changePage, danhMuc = 1, quanhuyen = "") => {
        onGetListDiemDenAsync({ searchText: searchText, limit: limit, page: page, danhMuc: danhMuc, quanhuyen: quanhuyen });
    };

    const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(e.target.value, pageSize, changePage, searchDanhMuc, searchQuanHuyen).then((_) => { });
        }, Constants.DEBOUNCE_SEARCH);
    };

    const onPreviousPage = () => {
        setChangePage(changePage - 1);
        onSearch(searchText, pageSize, changePage - 1, searchDanhMuc, searchQuanHuyen).then((_) => { });
    }

    const onNextPage = () => {
        setChangePage(changePage + 1);
        onSearch(searchText, pageSize, changePage + 1, searchDanhMuc, searchQuanHuyen).then((_) => { });
    }
    useEffect(() => {
        onSearch().then((_) => { });
        onGetQuanHuyenAsync().then((_) => { });
    }, []);

    const onSelectDanhMuc = (e) => {
        setSearchDanhMuc(e.target.value)
        onSearch(searchText, pageSize, changePage, e.target.value, searchQuanHuyen).then((_) => { });
    }

    const onSelectQuanHuyen = (e) => {
        setSearchQuanHuyen(e.target.value)
        onSearch(searchText, pageSize, changePage, searchDanhMuc, e.target.value).then((_) => { });
    }

    return (
        <MainLayout>
            <BannerCommon
                title={"Khám phá các địa điểm du lịch"}
                redirect={ROUTE_PATH.HOME_PAGE}
                redirectPage={"Trang chủ"}
                currentPage={"Điểm du lịch"}
            />
            <SearchDestination
                searchText={searchText}
                onChangeSearchText={onChangeSearchText}
                dsQuanHuyen={dsQuanHuyen}
                dsDanhMucDiaDiem={dsDanhMucDiaDiem}
                onSelectDanhMuc={onSelectDanhMuc}
                onSelectQuanHuyen={onSelectQuanHuyen} />
            <section className="places-section pb-100 bg-light">
                <div className="container">
                    <div className="row ">
                        {listDiaDiem.map((it, index) => (
                            <div key={index} className="col-xl-4 col-md-6 col-sm-12 places-column">
                                <div className="single-place-item mb-60 wow fadeInUp">
                                    <div className="place-img">
                                        <img src={
                                            it.hinhAnh?.indexOf("http") == -1
                                                ?
                                                showImageCommon(it.hinhAnh)
                                                :
                                                it.hinhAnh
                                        } height={220} alt="Image" className='object-cover' />
                                    </div>
                                    <div className="place-content">
                                        <div className="info">
                                            <div>{ViewStarCommon(convertNumber(it.soSaoTrungBinh))}</div>
                                            <h4 className="title text-truncate-title"><a>{it.tenDiaDiem} </a></h4>
                                            <p className="location text-truncate-title"><i className="far fa-map-marker-alt "></i>{it.diaChi} </p>
                                            <p className="price"><i className="fas fa-usd-circle"></i> {it.giaVe === Constants.FreePrice || Constants.Undefined ? it.giaVe : `Chỉ từ: ${it.giaVe}`}</p>
                                            <div className="meta">
                                                <span><i className="far fa-clock"></i>{it.gioMoCua} </span>
                                                <span>-</span>
                                                <span><i className="far fa-clock"></i>{it.gioDongCua} </span>
                                                <span><a href={`${ROUTE_PATH.VIEW_DESTINATION}?${it.idDiaDiem}`}>Xem chi tiết<i className="far fa-long-arrow-right"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PaginationCommon
                        changePage={changePage}
                        onPreviousPage={onPreviousPage}
                        onNextPage={onNextPage}
                        pagination={pagination}
                    />
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout>
    )
}

export default DestinationPage