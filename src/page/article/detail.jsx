import React, { useEffect, useState } from 'react'
import BannerCommon from '../../infratructure/common/controls/banner'
import MainLayout from '../../infratructure/common/layout/main-layout'
import { ROUTE_PATH } from '../../core/common/appRouter'
import RelationArticle from '../../infratructure/common/controls/relation-article'
import Constants from '../../core/common/constant'

const AritcleDetail = () => {
    const [detalArticle, setDetalArticle] = useState({});
    useEffect(() => {
        setDetalArticle(Constants.DataTemplate.list[1])
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
                                        <img src={detalArticle.img} alt="Blog Image" />
                                    </div>
                                    <div class="post-meta text-center pt-25 pb-15 mb-25">
                                        <span><i class="far fa-user"></i><a href="#">Matthew N. Davis</a></span>
                                        <span><i class="far fa-calendar-alt"></i><a href="#">{detalArticle.date} </a></span>
                                        <span><i class="far fa-comment"></i><a href="#">Lượt xem (05)</a></span>
                                    </div>
                                    <div class="main-post">
                                        <div class="entry-content">
                                            <h3 class="title">{detalArticle.name} </h3>
                                            <p>{detalArticle.description} </p>
                                            <h4>Build Camping Easily</h4>
                                            <p>{detalArticle.description} </p>
                                            <blockquote class="block-quote">
                                                <img src="assets/images/blog/quote.png" alt="quote image" />
                                                <h3>{detalArticle.description} </h3>
                                                <span>Johnny M. Martin</span>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <RelationArticle
                                title={"Bài viết liên quan"} />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}

export default AritcleDetail