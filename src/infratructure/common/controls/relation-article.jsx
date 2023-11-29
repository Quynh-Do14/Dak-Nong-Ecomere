import React from 'react'
import Constants from '../../../core/common/constant'

const RelationArticle = (props) => {
    const { title } = props;
    return (
        <div class="sidebar-widget-area">
            <div class="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
                <h4 class="widget-title">{title} </h4>
                <ul class="recent-post-list">
                    {Constants.DataTemplate.list.map((it, index) => (
                        <li key={index} class="post-thumbnail-content">
                            <img src={it.img} alt="post thumb" />
                            <div class="post-title-date">
                                <h5><a href="blog-details.html">{it.name} </a></h5>
                                <span class="posted-on"><i class="far fa-calendar-alt"></i><a href="#">{it.date} </a></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RelationArticle