import React from 'react'

const SearchArticle = (props) => {
    const {
        searchText,
        onChangeSearchText,
    } = props
    return (
        <div className="sidebar-widget-area">
            <div className="sidebar-widget search-widget mb-30 wow fadeInUp bg-white">
                <h4 className="widget-title">Tim kiếm bài viết</h4>
                <form>
                    <div className="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Tên bài viết </span>
                        <input value={searchText} onChange={onChangeSearchText} type="text" className="form_control" placeholder="Tên bài viết" required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchArticle