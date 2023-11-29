import React, { useEffect, useState } from 'react'
import BannerCommon from '../../infratructure/common/controls/banner'
import MainLayout from '../../infratructure/common/layout/main-layout'
import { ROUTE_PATH } from '../../core/common/appRouter'
import RelationArticle from '../../infratructure/common/controls/relation-article'
import Constants from '../../core/common/constant'

const FestivalDetail = () => {
    const [detalFestival, setDetalFestival] = useState({});
    useEffect(() => {
        setDetalFestival(Constants.DataTemplate.list[1])
    }, []);
    return (
        <MainLayout>
            <BannerCommon
                title={"Lễ hội"}
                redirect={ROUTE_PATH.FESTIVAL}
                redirectPage={"Lễ hội"}
                currentPage={"Chi tiết Lễ hội"}
            />
            <section class="blog-details-section pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8">
                            <div class="blog-details-wrapper pr-lg-50">
                                <div class="blog-post mb-60 wow fadeInUp">
                                    <div class="post-thumbnail">
                                        <img src={detalFestival.img} alt="Blog Image" />
                                    </div>
                                    <div class="post-meta text-center pt-25 pb-15 mb-25">
                                        <span><i class="far fa-user"></i><a href="#">Matthew N. Davis</a></span>
                                        <span><i class="far fa-calendar-alt"></i><a href="#">{detalFestival.date} </a></span>
                                        <span><i class="far fa-comment"></i><a href="#">Lượt xem (05)</a></span>
                                    </div>
                                    <div class="main-post">
                                        <div class="entry-content">
                                            <h3 class="title">{detalFestival.name} </h3>
                                            <p>{detalFestival.description} </p>
                                            <h4>Build Camping Easily</h4>
                                            <p>{detalFestival.description} </p>
                                            <blockquote class="block-quote">
                                                <img src="assets/images/blog/quote.png" alt="quote image" />
                                                <h3>{detalFestival.description} </h3>
                                                <span>Johnny M. Martin</span>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <RelationArticle
                                title={"Lễ hội tương tự"} />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}

export default FestivalDetail