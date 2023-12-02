import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import SearchArticle from './search'
import BannerCommon from '../../infratructure/common/controls/banner'
import { ROUTE_PATH } from '../../core/common/appRouter'
import Constants from '../../core/common/constant'
import { useNavigate } from 'react-router-dom'
import api from '../../infratructure/api'
import { convertDateOnly, convertNumber, showImageCommon } from '../../infratructure/utils/helper'
import { ViewStarCommon } from '../../infratructure/common/controls/view-star'
import PaginationCommon from '../../infratructure/common/controls/pagination'
import LoadingFullPage from '../../infratructure/common/controls/loading'
let timeout
const ArticlePage = () => {
    const [listTinTuc, setListTinTuc] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [changePage, setChangePage] = useState(1);


    const onGetListTinTucAsync = async ({ searchText = "", limit = pageSize, page = 1 }) => {
        const response = await api.getAllTinTuc(
            `loaitin?type=1${searchText ? searchText != "" ? `&search=${searchText}` : `` : ``}&limit=${limit}&page=${page}`,
            setLoading
        );
        setListTinTuc(response.data.tinTucs);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    };
    const onSearch = async (searchText = "", limit = pageSize, page = 1) => {
        onGetListTinTucAsync({ searchText: searchText, limit: limit, page: page });
    };
    useEffect(() => {
        onSearch().then((_) => { });
    }, []);

    const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(e.target.value, pageSize, changePage).then((_) => { });
        }, Constants.DEBOUNCE_SEARCH);
    };

    const onPreviousPage = () => {
        setChangePage(changePage - 1);
        onSearch(searchText, pageSize, changePage - 1).then((_) => { });
    }

    const onNextPage = () => {
        setChangePage(changePage + 1);
        onSearch(searchText, pageSize, changePage + 1).then((_) => { });
    }
    return (
        <MainLayout>
            <BannerCommon
                title={"Bài viết hôm nay"}
                redirect={ROUTE_PATH.HOME_PAGE}
                redirectPage={"Trang chủ"}
                currentPage={"Bài viết"}
            />
            <section className="blog-list-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-list-wrapper" >
                                {listTinTuc.map((it, index) => (
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
                                            <div className="post-meta">
                                                <span><i className="far fa-calendar-alt"></i><a>{convertDateOnly(it.ngayDang)} </a></span>
                                            </div>
                                            <h3 className="title"><a>{it.tieuDe} </a></h3>
                                            <span> <i class="far fa-eye"></i> <a>Lượt xem ({it.luotXem})</a></span>
                                            <div>{ViewStarCommon(convertNumber(it.soSaoTrungBinh))}</div>
                                            <p className=' text-truncate mb-10'>{it.moTaNgan} </p>
                                            <a href={`${ROUTE_PATH.VIEW_ARTICLE}?${it.idTinTuc}`} className="main-btn filled-btn">Xem thêm <i className="fas fa-paper-plane"></i></a>
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
                            <SearchArticle
                                searchText={searchText}
                                onChangeSearchText={onChangeSearchText}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default ArticlePage