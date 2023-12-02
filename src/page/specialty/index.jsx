import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/controls/banner'
import { ROUTE_PATH } from '../../core/common/appRouter'
import Constants from '../../core/common/constant'
import SearchSpecialty from './search'
import api from '../../infratructure/api'
import { convertDateOnly, convertNumber, showImageCommon } from '../../infratructure/utils/helper'
import { ViewStarCommon } from '../../infratructure/common/controls/view-star'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import PaginationCommon from '../../infratructure/common/controls/pagination'
let timeout
const SpecialtyPage = () => {
    const [listDacSan, setListDacSan] = useState([]);
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [changePage, setChangePage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [qH, setQH] = useState("");
    const [searchText, setSearchText] = useState("");
    const [dsQuanHuyen, setDsQuanHuyen] = useState([])

    const onGetListDacSanAsync = async ({ searchText = "", limit = pageSize, page = 1, qH = "" }) => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}&${Constants.Params.limit}=${limit}&${Constants.Params.page}=${page}&searchDiaChi=${searchText}&idQuanHuyen=${qH}`,
            setLoading
        )
        setListDacSan(response.data.diaDiems);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }
    const onSearch = async (searchText = "", limit = pageSize, page = 1, qH = "") => {
        onGetListDacSanAsync({ searchText: searchText, limit: limit, page: page, qH: qH })
    }
    useEffect(() => {
        onSearch().then(_ => { })
    }, []);

    const onChangeSearchText = async (e) => {
        setSearchText(e.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(e.target.value, pageSize, changePage, qH).then((_) => { });
        }, Constants.DEBOUNCE_SEARCH);
    };

    const onChangeQH = (e) => {
        setQH(e.target.value);
        onSearch(searchText, pageSize, changePage, e.target.value).then((_) => { });
    }

    const onPreviousPage = () => {
        setChangePage(changePage - 1);
        onSearch(searchText, pageSize, changePage - 1, qH).then((_) => { });
    }

    const onNextPage = () => {
        setChangePage(changePage + 1);
        onSearch(searchText, pageSize, changePage + 1, qH).then((_) => { });
    }
    return (
        <MainLayout>
            <BannerCommon
                title={"Đặc sản"}
                redirect={ROUTE_PATH.HOME_PAGE}
                redirectPage={"Trang chủ"}
                currentPage={"Đặc sản"}
            />
            <section className="blog-list-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-list-wrapper" >
                                {listDacSan.map((it, index) => (
                                    <div key={index} className="single-blog-post-four mb-30 wow fadeInDown">
                                        <div className="post-thumbnail">
                                            <img src={
                                                it.hinhAnh?.indexOf("http") == -1
                                                    ?
                                                    showImageCommon(it.hinhAnh)
                                                    :
                                                    it.hinhAnh
                                            } height={280} alt="Image" className='object-cover' />
                                        </div>
                                        <div className="entry-content">
                                            <h3 className="title"><a>{it.tenDiaDiem} </a></h3>
                                            <div className="post-meta">
                                                <span><a>{it.diaChi} </a></span>
                                            </div>
                                            <span> <i class="far fa-eye"></i> <a>Lượt xem ({it.luotXem})</a></span>
                                            <div>{ViewStarCommon(convertNumber(it.soSaoTrungBinh))}</div>
                                            <p className=' text-truncate mb-10'>{it.moTa} </p>
                                            <a href={`${ROUTE_PATH.VIEW_SPECIALTY}?${it.idDiaDiem}`} className="main-btn filled-btn">Xem thêm <i className="fas fa-paper-plane"></i></a>
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
                        <div className="col-xl-4">
                            <SearchSpecialty
                                dsQuanHuyen={dsQuanHuyen}
                                onChangeQH={onChangeQH}
                                onChangeSearchText={onChangeSearchText}
                                searchText={searchText}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default SpecialtyPage