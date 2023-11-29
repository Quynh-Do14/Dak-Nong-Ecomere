import React from 'react'

const FooterPage = () => {
    return (
        <div>
            <footer className="main-footer black-bg pt-230">
                <div className="container">
                    <div className="footer-cta pb-40">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-cta-item pr-lg-60 mb-40 wow fadeInLeft">
                                    <div className="icon">
                                        <img src="assets/images/icon/support.png" alt="Icon" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Need Any Support For
                                            Tour & Travels ?</h3>
                                        <a href="#" className="icon-btn"><i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-cta-item pl-lg-60 mb-40 wow fadeInRight">
                                    <div className="icon">
                                        <img src="assets/images/icon/travel.png" alt="Icon" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Ready to Get Started With Vacations!</h3>
                                        <a href="#" className="icon-btn"><i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget-area pt-75 pb-30">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                                    <h4 className="widget-title">About</h4>
                                    <div className="footer-content">
                                        <p>To take trivial example which us
                                            ever undertakes laborious physica
                                            exercise except obsome</p>
                                        <a href="#" className="footer-logo"><img src="assets/images/logo/logo-white.png" alt="Site Logo" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                                    <h4 className="widget-title">Services</h4>
                                    <div className="footer-content">
                                        <ul className="footer-widget-nav">
                                            <li><a href="#">Caravan Soler Tent</a></li>
                                            <li><a href="#">Family Tent Camping</a></li>
                                            <li><a href="#">classNameic Tent Camping</a></li>
                                            <li><a href="#">Wild Tent Camping</a></li>
                                            <li><a href="#">Small Cabin Wood</a></li>
                                        </ul>
                                        <ul className="footer-widget-nav">
                                            <li><a href="#">Need a Career ?</a></li>
                                            <li><a href="#">Latest News & Blog</a></li>
                                            <li><a href="#">Core Features</a></li>
                                            <li><a href="#">Meet Our teams</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <div className="footer-content">
                                        <p>Which of us ever undertake laborious
                                            physical exercise except obtain</p>
                                        <form>
                                            <div className="form_group">
                                                <label><i className="far fa-paper-plane"></i></label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footer-text">
                                    <p>Copy@ 2023 <span style={{ color: "#F7921E" }}>GoWilds</span>, All Right Reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-nav float-lg-end">
                                    <ul>
                                        <li><a href="#">Setting & privacy</a></li>
                                        <li><a href="#">Faqs</a></li>
                                        <li><a href="#">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default FooterPage;