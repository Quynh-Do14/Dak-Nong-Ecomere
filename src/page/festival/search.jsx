import React from 'react'

const SearchFestival = (props) => {
    const {
        searchText,
        onChangeSearchText,
        startDate,
        onChangeStartDate,
        endDate,
        onChangeEndDate,
    } = props;
    return (
        <div className="sidebar-widget-area">
            <div className="sidebar-widget search-widget mb-30 wow fadeInUp">
                <h4 className="widget-title">Tim kiếm lễ hội</h4>
                <form>
                    <div className="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Tên lễ hội</span>
                        <input onChange={onChangeSearchText} value={searchText} type="text" className="form_control" placeholder="Nhập tên lễ hội...." name="search" required />
                    </div>
                    <div className="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Ngày bắt đầu</span>
                        <input onChange={onChangeStartDate} value={startDate} type="date" className="form_control" placeholder="" name="search" required />
                    </div>
                    <div className="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Ngày kết thúc</span>
                        <input onChange={onChangeEndDate} value={endDate} type="date" className="form_control" placeholder="" name="search" required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchFestival