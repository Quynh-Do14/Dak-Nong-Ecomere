import React from 'react'
import Constants from '../../../core/common/constant';

const HeaderPage = () => {
    return (
        <header className="header-area header-two transparent-header">
            <div className="header-navigation navigation-white">
                <div className="nav-overlay"></div>
                <div className="container-fluid">
                    <div className="primary-menu">
                        <div className="site-branding">
                            <a href="index.html" className="brand-logo">
                                <img src="assets/images/logo/logo-white.png" alt="Site Logo" />
                            </a>
                        </div>
                        <div className="nav-menu">
                            <div className="mobile-logo mb-30 d-block d-xl-none">
                                <a href="index.html" className="brand-logo">
                                    <img src="assets/images/logo/logo-black.png" alt="Site Logo" />
                                </a>
                            </div>

                            <nav className="main-menu">
                                <ul>
                                    {Constants.Menu.List.map((it, index) => (
                                        <li key={index} className="menu-item has-children"><a href={it.link}>{it.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderPage;