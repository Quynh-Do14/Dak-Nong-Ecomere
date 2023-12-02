import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/controls/banner'
import { ROUTE_PATH } from '../../core/common/appRouter'
import Constants from '../../core/common/constant'
import api from '../../infratructure/api'
import { convertDateOnly, convertNumber, showImageCommon } from '../../infratructure/utils/helper'
import { ViewStarCommon } from '../../infratructure/common/controls/view-star'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import PaginationCommon from '../../infratructure/common/controls/pagination'
import SearchFestival from './search'
let timeout
const FestivalPage = () => {
    const [listLeHoi, setListLeHoi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [changePage, setChangePage] = useState(1);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const onGetListLeHoiAsync = async ({ searchText = "", limit = pageSize, page = 1, startDate = "", endDate = "" }) => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Festival.value}&${Constants.Params.limit}=${limit}&${Constants.Params.page}=${page}&startDate=${startDate}&endDate=${endDate}&search=${searchText}`,
            setLoading
        )
        setListLeHoi(response.data.diaDiems);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }
    const onSearch = async (searchText = "", limit = pageSize, page = 1, startDate = "", endDate = "") => {
        onGetListLeHoiAsync({ searchText: searchText, limit: limit, page: page, startDate: startDate, endDate: endDate, })
    }
    useEffect(() => {
        onSearch().then(_ => { })
    }, []);

    const onChangeSearchText = async (e) => {
        setSearchText(e.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(e.target.value, pageSize, changePage, startDate, endDate).then((_) => { });
        }, Constants.DEBOUNCE_SEARCH);
    };
    const onChangeStartDate = async (e) => {
        setStartDate(e.target.value);
        if (endDate != "") {
            await onSearch(searchText, pageSize, changePage, e.target.value, endDate).then((_) => { });
        }
    }

    const onChangeEndDate = async (e) => {
        setEndDate(e.target.value);
        if (startDate != "") {
            await onSearch(searchText, pageSize, changePage, startDate, e.target.value).then((_) => { });
        }
    }
    const onPreviousPage = () => {
        setChangePage(changePage - 1);
        onSearch(searchText, pageSize, changePage - 1, startDate, endDate).then((_) => { });
    }

    const onNextPage = () => {
        setChangePage(changePage + 1);
        onSearch(searchText, pageSize, changePage + 1, startDate, endDate).then((_) => { });
    }

    return (
        <MainLayout>
            <BannerCommon
                title={"Lễ hội"}
                redirect={ROUTE_PATH.HOME_PAGE}
                redirectPage={"Trang chủ"}
                currentPage={"Lễ hội"}
            />
            <section className="blog-list-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-list-wrapper" >
                                {listLeHoi.map((it, index) => (
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
                                                <span><i className="far fa-calendar-alt"></i><a>{convertDateOnly(it.gioMoCua)} - {convertDateOnly(it.gioDongCua)} </a></span>
                                            </div>
                                            <span> <i class="far fa-eye"></i> <a>Lượt xem ({it.luotXem})</a></span>
                                            <div>{ViewStarCommon(convertNumber(it.soSaoTrungBinh))}</div>
                                            <p className=' text-truncate mb-10'>{it.moTa} </p>
                                            <a href={`${ROUTE_PATH.VIEW_FESTIVAL}?${it.idDiaDiem}`} className="main-btn filled-btn">Xem thêm <i className="fas fa-paper-plane"></i></a>
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
                            <SearchFestival
                                 title={"lễ hội"}
                                searchText={searchText}
                                onChangeSearchText={onChangeSearchText}
                                startDate={startDate}
                                onChangeStartDate={onChangeStartDate}
                                endDate={endDate}
                                onChangeEndDate={onChangeEndDate}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default FestivalPage