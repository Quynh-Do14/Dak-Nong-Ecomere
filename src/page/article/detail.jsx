import React, { useEffect, useState } from 'react'
import BannerCommon from '../../infratructure/common/controls/banner'
import MainLayout from '../../infratructure/common/layout/main-layout'
import { ROUTE_PATH } from '../../core/common/appRouter'
import RelationArticle from '../../infratructure/common/controls/relation-article'
import Constants from '../../core/common/constant'
import api from '../../infratructure/api'
import { convertDateOnly, showImageCommon } from '../../infratructure/utils/helper'
import { useLocation } from 'react-router-dom'
import LoadingFullPage from '../../infratructure/common/controls/loading'

const AritcleDetail = () => {
    const [loading, setLoading] = useState(false);
    const [detailArticle, setDetailArticle] = useState({});
    const [listTinTucLienQuan, setListTinTucLienQuan] = useState([]);

    const location = useLocation()
    const search = location.search.replace("?", "")
    const onGetDetailTinTucAsync = async () => {
        const response = await api.getAllTinTuc(
            `loaitin/${search}?type=1`,
            setLoading
        )
        setDetailArticle(response.tinTuc);

    }
    const onGetListTinTucAsync = async () => {
        const response = await api.getAllTinTuc(
            `loaitin?type=1&limit=3`,
            setLoading
        );
        setListTinTucLienQuan(response.data.tinTucs);
    };

    useEffect(() => {
        onGetDetailTinTucAsync().then(_ => { });
        onGetListTinTucAsync().then(_ => { });
    }, []);
    return (
        <MainLayout>
            <BannerCommon
                title={"Bài viết hôm nay"}
                redirect={ROUTE_PATH.ARTICLE}
                redirectPage={"Bài viết"}
                currentPage={"Chi tiết bài viết"}
            />
            <section class="blog-details-section pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8">
                            <div class="blog-details-wrapper pr-lg-50">
                                <div class="blog-post mb-60 wow fadeInUp">
                                    <div class="post-thumbnail">
                                        <img src={
                                            detailArticle.hinhAnh?.indexOf("http") == -1
                                                ?
                                                showImageCommon(detailArticle.hinhAnh)
                                                :
                                                detailArticle.hinhAnh
                                        } alt="Image" className='object-cover' />
                                    </div>
                                    <div class="post-meta text-center pt-25 pb-15 mb-25">
                                        <span><i class="far fa-user"></i><a></a></span>
                                        <span><i className="far fa-calendar-alt"></i><a>{convertDateOnly(detailArticle.ngayDang)} </a></span>
                                        <span> <i class="far fa-eye"></i> <a>Lượt xem ({detailArticle.luotXem})</a></span>
                                    </div>
                                    <div class="main-post">
                                        <div class="entry-content">
                                            <h3 class="title">{detailArticle.tieuDe} </h3>
                                            <p>{detailArticle.tieuDeCon} </p>
                                            <div className='post-meta mb-20'></div>
                                            <h6>{detailArticle.moTaNgan} </h6>
                                            <blockquote class="block-quote">
                                                <img src="assets/images/blog/quote.png" alt="quote image" />
                                                <h6 className='text-align-left'>{detailArticle.chiTiet} </h6>
                                                <span></span>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <RelationArticle
                                title={"Bài viết liên quan"}
                                data={listTinTucLienQuan} />
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default AritcleDetail