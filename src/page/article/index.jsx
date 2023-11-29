import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import SearchArticle from './search'
import BannerCommon from '../../infratructure/common/controls/banner'
import { ROUTE_PATH } from '../../core/common/appRouter'
import Constants from '../../core/common/constant'

const ArticlePage = () => {
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
                                {Constants.DataTemplate.list.map((it, index) => (
                                    <div key={index} className="single-blog-post-four mb-30 wow fadeInDown">
                                        <div className="post-thumbnail">
                                            <img src={it.img} alt="Post Image" />
                                        </div>
                                        <div className="entry-content">
                                            <div className="post-meta">
                                                <span><i className="far fa-calendar-alt"></i><a href="#">{it.date} </a></span>
                                            </div>
                                            <h3 className="title"><a href="blog-details.html">{it.name} </a></h3>
                                            <h6 className="author"><i className="far fa-user"></i><a href="#">Matthew N. Davis</a></h6>
                                            <a href="blog-details.html" className="main-btn filled-btn">Xem thêm <i className="fas fa-paper-plane"></i></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <ul className="gowilds-pagination wow fadeInDown mt-60 mb-30">
                                <li><a href="#"><i className="far fa-arrow-left"></i></a></li>
                                <li><a href="#" className="active">01</a></li>
                                <li><a href="#">02</a></li>
                                <li><a href="#">03</a></li>
                                <li><a href="#">04</a></li>
                                <li><a href="#"><i className="far fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-xl-4">
                            <SearchArticle />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}

export default ArticlePage