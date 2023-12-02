import React from 'react'

const SearchDestination = (props) => {
    const {
        searchText,
        onChangeSearchText,
        dsQuanHuyen = [],
        dsDanhMucDiaDiem = [],
        onSelectDanhMuc,
        onSelectQuanHuyen
    } = props
    return (
        <section className="booking-form-section pb-100">
            <div className="container-fluid">
                <div className="booking-form-wrapper p-r z-2">
                    <form action="index-2.html" className="booking-form-two">
                        <div className="form_group">
                            <span>Tên địa điểm</span>
                            <input value={searchText} onChange={onChangeSearchText} type="text" className="form_control datepicker" placeholder="Nhập tên địa điểm..." />
                        </div>
                        <div className="form_group">
                            <span>Loại hình du lịch</span>
                            <select onChange={onSelectDanhMuc} className="wide form_control">
                                <option data-display="" value={""}>Loại hình du lịch</option>
                                {dsDanhMucDiaDiem?.map((it, index) => (
                                    <option key={index} value={it.idDanhMucDiaDiem}>{it.tenDanhMuc} </option>
                                ))}
                            </select>
                        </div>
                        <div className="form_group">
                            <span>Quận huyện</span>
                            <select onChange={onSelectQuanHuyen} className="wide form_control">
                                <option data-display="" value={""}>Quận huyện</option>
                                {dsQuanHuyen?.map((it, index) => (
                                    <option key={index} value={it.idQuanHuyen}>{it.tenQuanHuyen} </option>
                                ))}
                            </select>
                        </div>
                        {/* <div className="btn-form-group">
                            <button className="booking-btn">Tìm kiếm <i className="far fa-angle-double-right"></i></button>
                        </div> */}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SearchDestination