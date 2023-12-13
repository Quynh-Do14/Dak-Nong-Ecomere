import React from 'react'

const FooterPage = () => {
    return (
        <div>
            <footer className="main-footer bg-light pt-50">
                <div className="container">
                    <div className="footer-widget-area pb-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                                    <h4 className="widget-title">Hãy đến với Đắk Nông</h4>
                                    <div className="footer-content">
                                        <p>
                                            Để có những trải nghiệm du lich thực sự đáng nhớ
                                            <br />
                                            Đắk Nông, vùng đất tuyệt vời !
                                        </p>
                                        <a href="#" className="footer-logo"><img src="assets/images/logo/logo-black.png" alt="Site Logo" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                                    <h4 className="widget-title">Bản đồ</h4>
                                    <div className="footer-content">
                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
                                    <h4 className="widget-title">Thông tin liên hệ</h4>
                                    <div className="footer-content">

                                    </div>
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