import React from 'react'

const SearchSpecialty = (props) => {
    const {
        dsQuanHuyen,
        onChangeQH,
        onChangeSearchText,
        searchText
    } = props
    return (
        <div className="sidebar-widget-area">
            <div className="sidebar-widget search-widget mb-30 wow fadeInUp">
                <h4 className="widget-title">Tim kiếm</h4>
                <form>
                    <div className="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Tên đặc sản</span>
                        <input value={searchText} onChange={onChangeSearchText} type="text" className="form_control" placeholder="Nhập tên đặc sản..." name="search" required />
                    </div>
                    <div className="form_group mb-20">
                        <span className='d-flex justify-contnet-start mb-10'>Quận huyện</span>
                        <select onChange={onChangeQH} className="form_control" placeholder="Ngày đăng" name="search" required>
                            <option value={""}>Quận huyện </option>
                            {dsQuanHuyen?.map((it, index) => (
                                <option key={index} value={it.idQuanHuyen}>{it.tenQuanHuyen} </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchSpecialty