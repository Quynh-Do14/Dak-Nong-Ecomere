import React from 'react'

const SearchArticle = (props) => {
    const {
        searchText,
        onChangeSearchText,
    } = props
    return (
        <div class="sidebar-widget-area">
            <div class="sidebar-widget search-widget mb-30 wow fadeInUp">
                <h4 class="widget-title">Tim kiếm bài viết</h4>
                <form>
                    <div class="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Tên bài viết </span>
                        <input value={searchText} onChange={onChangeSearchText} type="text" class="form_control" placeholder="Tên bài viết" name="search" required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchArticle