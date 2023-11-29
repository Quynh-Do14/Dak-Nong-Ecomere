import React from 'react'

const SearchDestination = () => {
    return (
        <section className="booking-form-section pb-100">
            <div className="container-fluid">
                <div className="booking-form-wrapper p-r z-2">
                    <form action="index-2.html" className="booking-form-two">
                        <div className="form_group">
                            <span>Tên địa điểm</span>
                            <label><i className="far fa-calendar-alt"></i></label>
                            <input type="text" className="form_control datepicker" placeholder="Check In" />
                        </div>
                        <div className="form_group">
                            <span>Quận huyện</span>
                            <select className="wide form_control">
                                <option data-display="Accommodations">Accommodations</option>
                                <option value="01">ClassNameic Tent</option>
                                <option value="01">Forest Camping</option>
                                <option value="01">Small Trailer</option>
                                <option value="01">Tree House Tent</option>
                                <option value="01">Tent Camping</option>
                                <option value="01">Couple Tent</option>
                            </select>
                        </div>
                        <div className="form_group">
                            <button className="booking-btn">Tìm kiếm <i className="far fa-angle-double-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SearchDestination