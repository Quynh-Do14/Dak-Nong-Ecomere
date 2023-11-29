import React from 'react'

const SearchArticle = () => {
    return (
        <div class="sidebar-widget-area">
            <div class="sidebar-widget search-widget mb-30 wow fadeInUp">
                <h4 class="widget-title">Tim kiếm</h4>
                <form>
                    <div class="form_group mb-20">
                        <label><i className="far fa-calendar-alt"></i></label>
                        <input type="text" class="form_control" placeholder="Ngày đăng" name="search" required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchArticle