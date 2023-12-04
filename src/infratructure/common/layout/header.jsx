import React, { useState } from 'react'
import Constants from '../../../core/common/constant';
import LoginPopup from '../popup/login-popup';
import LoadingFullPage from '../controls/loading';
import { ROUTE_PATH } from '../../../core/common/appRouter';
import { SuccessMessage } from '../toast/toastMessage';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../popup/confirm-modal';
import RegisterPopup from '../popup/register-modal';

const HeaderPage = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [isOpenPopupLogin, setIsOpenPopupLogin] = useState(false);
    const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
    const [isOpenModalLogout, setIsOpenModalLogout] = useState(false);

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onOpenMobileMenu = () => {
        setIsOpenMobileMenu(true);
    }

    const onCloseMobileMenu = () => {
        setIsOpenMobileMenu(false);
    }

    const onOpenPopupLogin = () => {
        setIsOpenPopupLogin(true);
    }

    const onClosePopupLogin = () => {
        setIsOpenPopupLogin(false);
    }
    let storage = sessionStorage.getItem(Constants.TOKEN);

    const onLogout = () => {
        sessionStorage.clear();
        onCloseModalLogout();
        navigate(ROUTE_PATH.HOME_PAGE);
        window.location.reload();
        SuccessMessage("Đăng  xuất thành công", "Bạn đã đăng xuất khỏi hệ thống")
    };

    const onOpenModalLogout = () => {
        setIsOpenModalLogout(true);
    }

    const onCloseModalLogout = () => {
        setIsOpenModalLogout(false);
    }

    const onOpenModalRegister = () => {
        setIsOpenModalRegister(true);
    }

    const onCloseModalRegister = () => {
        setIsOpenModalRegister(false);
    }

    return (
        <div>
            <header className="header-area header-two transparent-header bg-black menu-desktop">
                <div className="header-navigation navigation-white">
                    <div className="nav-overlay"></div>
                    <div className="container-fluid menu-desktop-bg position-fixed white-space-nowrap ">
                        <div className="primary-menu">
                            <div className="site-branding">
                                <a href="index.html" className="brand-logo">
                                    <img src="assets/images/logo/logo-white.png" alt="Site Logo" />
                                </a>
                            </div>
                            <div className="nav-menu">

                                <nav className="main-menu">
                                    <ul>
                                        {Constants.Menu.List.map((it, index) => (
                                            <li key={index} className="menu-item has-children"><a href={it.link}>{it.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="nav-right-item pointer">
                                {
                                    storage
                                        ?
                                        <div className="menu-button d-xl-block d-none">
                                            <a onClick={onOpenModalLogout} className="main-btn primary-btn">Đăng xuất
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                                </i>
                                            </a>
                                        </div>
                                        :
                                        <div className="menu-button d-xl-block d-none">
                                            <a onClick={onOpenPopupLogin} className="main-btn primary-btn">Đăng nhập
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                                </i>
                                            </a>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </header >

            <header className="header-area header-two transparent-header menu-mobile position-fixed">
                {/* //// */}
                <div className="header-navigation bg-white navigation-white ">
                    <div className="container-fluid">
                        <div className="primary-menu d-flex justify-content-between">
                            <div className="site-branding">
                                <a href="index.html" className="brand-logo">
                                    <img src="assets/images/logo/logo-black.png" alt="Site Logo" />
                                </a>
                            </div>
                            {
                                !isOpenMobileMenu
                                    ?
                                    <div className='toggler' onClick={onOpenMobileMenu}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="28" width="40" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                    </div>
                                    :
                                    <div className='toggler' onClick={onCloseMobileMenu}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="28" width="40" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
                {/* //// */}
                <div className={`header-navigation bg-white navigation-black row justify-content-start menu-mobile-width height-full container-fluid-mobile pt-40 pb-40 pl-20 pr-20 ${isOpenMobileMenu && "active"}`}>
                    <div className="">
                        <nav className="main-menu main-menu-mobile">
                            <div className="mobile-logo mb-30 d-block d-xl-none">
                                <a href="index.html" className="brand-logo">
                                    <img src="assets/images/logo/logo-black.png" alt="Site Logo" />
                                </a>
                            </div>

                            <ul className='d-flex flex-column'>
                                {Constants.Menu.List.map((it, index) => (
                                    <li key={index} className="menu-item menu-item-mobile has-children text-start"><a href={it.link}>{it.label}</a>
                                    </li>
                                ))}
                                <li>
                                    {
                                        storage
                                            ?
                                            <div className="menu-button mt-40 d-xl-none pointer">
                                                <a onClick={onOpenModalLogout} className="main-btn secondary-btn">Đăng kí
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                                    </i>
                                                </a>
                                            </div>
                                            :
                                            <div className="menu-button mt-40 d-xl-none pointer">
                                                <a onClick={onOpenPopupLogin} className="main-btn secondary-btn">Đăng nhập
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                                    </i>
                                                </a>
                                            </div>
                                    }

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
            <div className={`${!isOpenMobileMenu ? "nav-overlay" : "nav-overlay active"}`}></div>
            <LoginPopup
                title={"Đăng nhập"}
                visible={isOpenPopupLogin}
                onCancel={onClosePopupLogin}
                setLoading={setLoading}
                onOpenRegister={onOpenModalRegister}
            />

            <RegisterPopup
                title={"Đăng Kí"}
                visible={isOpenModalRegister}
                onCancel={onCloseModalRegister}
                setLoading={setLoading}
            />
            <ConfirmModal
                title={'Đăng xuất'}
                message={"Bạn có muốn đăng xuất khỏi hệ thống"}
                visible={isOpenModalLogout}
                onOk={onLogout}
                onCancel={onCloseModalLogout}
            />
            <LoadingFullPage loading={loading} />
        </div >
    )
}
export default HeaderPage;